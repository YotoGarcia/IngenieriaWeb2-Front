import { axiosInstance } from "../helper/axios-config";

const getDirector = () => {
    return axiosInstance.get('director', {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}

const postDirector = (data) => {
    return axiosInstance.post('director', data, {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}

const putDirector = (data, directorId) => {
    return axiosInstance.put('director/${directorId}', data, {
        Header: {
            'Content-Type': 'aplication/json'
        }
    })
}


export {
    getDirector, postDirector, putDirector
}