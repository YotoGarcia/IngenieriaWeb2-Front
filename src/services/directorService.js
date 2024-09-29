import { axiosInstance } from "../helper/axios-config";

const getDirector = () => {
    return axiosInstance.get('director', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const postDirector = (data) => {
    return axiosInstance.post('director', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const putDirector = (directorId, data ) => {
    return axiosInstance.put(`director/${directorId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const deleteDirector = (directorId, data ) => {
    return axiosInstance.delete(`director/${directorId}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export {
    getDirector, postDirector, putDirector, deleteDirector
}