<template lang="pug">
    a-sub-menu(
        :key="itemInfo.name"
        :title="itemInfo.meta.title"
    )
        a-menu-item(
            v-if="!itemInfo.children"
            :key="itemInfo.name"
            @click="ev_goTargetPage(itemInfo.name)"
        )
            a-icon(:type="itemInfo.meta.icon")
            span {{itemInfo.meta.title}}
        sub-menu(v-else :menu-info="itemInfo.children")
</template>
<script>
import subMenu from './subMenu'
export default {
    components: {
        subMenu
    },
    props: {
        itemInfo: {
            type: Object,
            default() {
                return {
                    meta: { title: ''},
                    path: '',
                    name: ''
                }
            }
        }
    },
    computed: {
        cpt_menuList() {
            let list = _.cloneDeep(this.$router.routes)
            console.log(this.$router.routes)
            return list
        }
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>

</style>