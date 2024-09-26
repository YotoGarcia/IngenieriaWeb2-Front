import { axiosInstance } from "../helper/axios-config";

const getGenero = () => {
    return axiosInstance.get('genero', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const postGenero = (data) => {
    return axiosInstance.post('genero', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const putGenero = (data, generoId) => {
    return axiosInstance.put(`genero/${generoId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export {
    getGenero, postGenero, putGenero
}