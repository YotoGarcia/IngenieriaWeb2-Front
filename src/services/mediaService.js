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
    return axiosInstance.get('media', {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}

const putMedia = (data) => {
    return axiosInstance.get('media', {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}
