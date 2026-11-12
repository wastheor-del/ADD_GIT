import axios from 'axios';

const API_BASE_URL = 'https://crudcrud.com/api/a703249ea41647e6ae38f95a20f2f66b' ;

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers:{
        'Content-type' : 'application/json',
    },
});