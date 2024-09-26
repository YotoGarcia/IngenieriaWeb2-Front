import { axiosInstance } from "../helper/axios-config";

const getGenero = () => {
    return axiosInstance.get('genero', {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}

const postGenero = (data) => {
    return axiosInstance.post('genero', data, {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}

const putGenero = (data, generoId) => {
    return axiosInstance.put('genero/${genero}', data, {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}


export {
    getGenero, postGenero, putGenero
}