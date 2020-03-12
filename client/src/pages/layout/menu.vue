<template lang="pug">
    a-menu(
        theme="dark"
        mode="inline"
        :defaultSelectedKeys="['1']"
    )
        a-menu-item(
            key="1")
            a-icon(type="user")
            span nav 1
        a-menu-item(
                key="2" 
                @click="ev_goTargetPage"
            )
            a-icon(type="video-camera")
            span 设置
</template>
<script>
export default {
    methods:{
        ev_goTargetPage() {
            this.$router.push({name: "setting"})
            .catch(err =>{
                err
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>