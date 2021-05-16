import axios, { AxiosResponse } from 'axios';
import { ThumbNail } from '../models/thumbnail';

axios.defaults.baseURL = 'http://localhost:3001/api';
axios.interceptors.response.use(async response => {
    try{
        return response;
    }
    catch(err){
        console.log(err);
        return Promise.reject(err);
    }
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url:string) => axios.get<T>(url).then(responseBody),
}

const ThumbNails = {
    list: () => requests.get<ThumbNail[]>('/thumbs'),
    detail: (id: string) => requests.get<ThumbNail>(`/thumbs/${id}`),
}

const agent = {
    ThumbNails
}

export default agent;