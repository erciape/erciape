import request from './index'

export const addTag = (tagName) => {
    return request({
        url: '/tag/add',
        method: 'POST',
        data: {
            tagName
        }
    })
}