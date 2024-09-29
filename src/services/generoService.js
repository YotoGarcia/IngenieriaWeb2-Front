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

const putGenero = (generoId, data ) => {
    return axiosInstance.put(`genero/${generoId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const deleteGenero = (generoId, data ) => {
    return axiosInstance.delete(`genero/${generoId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export {
    getGenero, postGenero, putGenero, deleteGenero
}