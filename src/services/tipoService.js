import { axiosInstance } from "../helper/axios-config";

const getTipo = () => {
    return axiosInstance.get('tipo', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const postTipo = (data) => {
    return axiosInstance.post('tipo', data,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const putTipo = (tipoId, data) => {
    return axiosInstance.put(`tipo/${tipoId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const deleteTipo = (tipoId, data ) => {
    return axiosInstance.delete(`tipo/${tipoId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export {
    getTipo, postTipo, putTipo, deleteTipo
}