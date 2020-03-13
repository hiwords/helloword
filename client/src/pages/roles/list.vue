<template lang="pug">
    .container
        a-button 列表
</template>
<script>
import {list} from '@/api/role'
export default {
    created(){
        list({
            user: '11'
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    }
}
</script>
<style lang="less" scoped>

</style>