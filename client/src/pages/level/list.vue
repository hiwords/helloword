<template lang="pug">
    .level-container
        a-form(:form="form")
            a-form-item(
                v-bind="cpt_formLayout"
                label="名称"
            )
                a-input(
                    size="large"
                    @pressEnter="api_create"
                )
</template>
<script>
import {create, list} from '@/api/level'
export default {
    data() {
        return {
            form: this.$form.createForm(this, {name: 'level_create_form'})
        }
    },
    created(){
    },
    computed: {
        cpt_formLayout() {
            return {
                'label-col': {span: 5 },
                'wrapper-col': { span: 12 }
            }
        }
    },
    methods: {
        api_create(e) {
            let name = e.target.value
            create({
                name,
            })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })
        }
    }
}
</script>
<style lang="less" scoped>
.role-detail{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 400px;
    background-color: #f1f1f1;
}
</style>