import axios from 'axios'



/* 实例化 */
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10000
})

export default service