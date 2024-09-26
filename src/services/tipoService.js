import { axiosInstance } from "../helper/axios-config";

const getTipo = () => {
    return axiosInstance.get('tipo', {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}

const postTipo = (data) => {
    return axiosInstance.post('tipo', data,{
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}

const putTipo = (tipo, data) => {
    return axiosInstance.put('tipo/${tipoId}', data, {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}


export {
    getTipo, postTipo, putTipo
}