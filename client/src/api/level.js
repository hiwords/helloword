import service from '@/request'

export function list(data) {
    return service({
        url: "/level/list",
        method: 'post',
        data
    })
}
export function create(data) {
    return service({
        url: "/level/create",
        method: 'post',
        data
    })
}