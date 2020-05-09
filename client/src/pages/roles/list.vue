<template lang="pug">
    .container
        .role-detail
            .role-info-item
                .info-item-title 角色名
                .info-item-content 宋一琳
        .role-list
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
.role-detail{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 400px;
    background-color: #f1f1f1;
}
</style>