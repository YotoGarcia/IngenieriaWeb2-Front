
import { axiosInstance } from "../helper/axios-config";

const getMedia = () => {
    return axiosInstance.get('media', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const postMedia = (data) => {
    return axiosInstance.post('media', data,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const putMedia = (mediaId, data) => {
    return axiosInstance.put(`media/${mediaId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const getMediaPorId = (mediaId) => {
    return axiosInstance.get(`media/${mediaId}`,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export {
    getMedia, postMedia, putMedia, getMediaPorId
}