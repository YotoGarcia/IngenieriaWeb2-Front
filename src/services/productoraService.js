import { axiosInstance } from "../helper/axios-config";

const getProductora = () => {
    return axiosInstance.get('productora', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const postProductora = (data) => {
    return axiosInstance.post('productora', data,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const putProductora = (data, productoraId) => {
    return axiosInstance.put(`productora/${productoraId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export {
    getProductora, postProductora, putProductora
}