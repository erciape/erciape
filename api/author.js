import request from './index'

export const getSentence = () => {
    return request({
        url: '/sentence',
    })
}
