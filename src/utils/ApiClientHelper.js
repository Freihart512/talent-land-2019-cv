import axios from 'axios'

const typeRequestAvailable = {
    get: true,
    post: true,
    put: true,
    delete: true,
    options: true,
}

export default class apiClient {
    constructor() {
        let service = axios.create({
            baseURL: process.env.REACT_APP_BASEURL,
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    makeRequest(type, path, reqParams, onSuccess, onFailure) {
        if (typeRequestAvailable[type])
            return this.service[type](path, reqParams)
                .then(response => onSuccess ? onSuccess(response) : null)
                .catch(e => onFailure ? onFailure(e) : null);
        else return onFailure ? onFailure({
            data: null,
            errorMessage: `this type of request is not available ${type}`,
            requestStatus: null,
        }) : null
    }

    handleSuccess(response) {
        if (response)
            return {
                data: response.data,
                error: null,
                requestStatus: response.status,
            }
        else return {
            data: null,
            errorMessage: null,
            requestStatus: null,
        }
    }

    handleError = (error) => {
        return Promise.reject({
            data: null,
            errorMessage: error.message || 'not messages available',
            requestStatus: error.response.status,
        });
    }

    get(path, onSuccess, onFailure) {
        return this.makeRequest('get', path, null, onSuccess, onFailure)
    }

    post(path, payload, onSuccess, onFailure) {
        return this.makeRequest('post', path,
            {
                responseType: 'json',
                data: payload
            }, onSuccess, onFailure)
    }

    delete(path, payload, onSuccess, onFailure) {
        return this.makeRequest('delete', path,
            {
                responseType: 'json',
                data: payload
            }, onSuccess, onFailure)
    }

    put(path, payload, onSuccess, onFailure) {
        return this.makeRequest('put', path,
            {
                responseType: 'json',
                data: payload
            }, onSuccess, onFailure)
    }
}