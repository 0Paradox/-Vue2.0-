import axios from 'axios'

export const getMenu = (param) => {
    return axios.request({
        url:'/permission/getTable',
        method:'post',
        data:param,
    })
}