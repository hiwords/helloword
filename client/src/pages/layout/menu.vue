<template lang="pug">
    a-menu(
        theme="dark"
        mode="inline"
        :defaultSelectedKeys="['1']"
    )
        template(v-for="item in cpt_menuList")
            a-menu-item(
                v-if="!item.children"
                :key="item.name"
                @click="ev_goTargetPage(item.name)"
            )
                a-icon(:type="item.meta.icon")
                span {{item.meta.title}}
            //- sub-menu(v-else :menu-info="item")
            a-sub-menu(
                v-else
                :key="item.name"
                :title="item.meta.title"
            )
                template(
                    v-if="!item.children"
                )
                    a-menu-item(
                        v-for="child in item.children"
                        :key="child.name"
                        @click="ev_goTargetPage(child.name)"
                    )
                        a-icon(:type="child.meta.icon")
                        span {{child.meta.title}}
</template>
<script>
// import subMenu from './subMenu'
export default {
    components: {
        // subMenu
    },
    computed: {
        cpt_menuList() {
            let list = _.cloneDeep(this.$router.options.routes[0].children)
            return list
        }
    },
    methods:{
        ev_goTargetPage(routeName) {
            this.$router.push({name: routeName})
            .catch(err =>{
                err
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>