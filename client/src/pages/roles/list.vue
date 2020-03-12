<template lang="pug">
    .container
        a-button 列表
</template>
<script>
import {list} from '@/api/role'
export default {
    created(){
        list()
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err)
        })
    }
}
</script>
<style lang="less" scoped>

</style>