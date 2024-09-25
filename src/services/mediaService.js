import { Header } from "../components/ui/Header";
import { axiosInstance } from "../helper/axios-config";

const getMedia = () => {
    return axiosInstance.get('media', {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}

const postMedia = (data) => {
    return axiosInstance.post('media', {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}

const putMedia = (data) => {
    return axiosInstance.put('media', {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}
export{
    getMedia, postMedia, putMedia
}