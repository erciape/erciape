import axios from 'axios'
// import { reject, resolve } from 'core-js/fn/promise'

const instance = axios.create({
    // baseURL: process.env.AXIOS_URL,
    baseURL: 'http://www.feicnc.com',
    withCredentials: true,
    timeout: 3000
})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


// 拦截器
instance.interceptors.request.use(config => {
    return config
},error => {
    return Promise.reject(error);
})

instance.interceptors.response.use(response => {
    return response
},error => {
    return Promise.reject(error);
})


const request = ({
    url,
    method = 'GET',
    params,
    data,
    headers,
    withCredentials = true,
    // token
}) => {
    // if (token) {
    //     console.log(document, getCookie('token'))
    // }
    let result = new Promise((resolve, reject) => {
        switch (method) {
            case 'POST':
                instance.post(url, data, {
                    withCredentials,
                    headers
                }).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
                break
            default:
                instance.get(url, {
                    method,
                    params,
                    withCredentials,
                    headers
                }).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
                break
        }
    })

    return result
}

export default request