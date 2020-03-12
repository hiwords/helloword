import service from '@/request'

export function list(data) {
    return service({
        url: '/role/list',
        methods: 'get',
        data
    })
}