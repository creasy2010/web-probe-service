/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2022/10/5
 **/

export interface IHttpClient {
    setCookie(cookie: string): void;

    get<T = any>(url: string, params?: any): Promise<T>;

    post<T = any>(url: string, data?: any): Promise<T>;

    put<T = any>(url: string, data?: any): Promise<T>;

    delete<T = any>(url: string, params?: any): Promise<T>;
}


import {AxiosInstance} from 'axios';

const axios = require('axios');

// debugger;
class HttpClient implements IHttpClient {
    public instance: AxiosInstance;

    public cookie: string;

    public id: number = Math.random();

    constructor() {
        console.log(`HttpClient ${this.id} init`);
        this.instance = axios.create({
            baseURL: process.env.APIJSON_HOST || 'http://10.4.2.55:8888',
            timeout: 60000,
            headers: {
                'Content-Type': 'application/json'
            },
            transformRequest: [(data, headers) => {
                // Do whatever you want to transform the data
                // headers.cookie=
                // console.log('transformRequest', data, headers);
                if (this.cookie) {
                    headers['Cookie'] = this.cookie;
                }
                // debugger;
                return JSON.stringify(data);
            }],
            transformResponse: [(data, headers) => {
                // console.log('transformResponse', data, headers);
                // debugger;
                if (headers['content-type'] === 'application/json') {
                    return JSON.parse(data);
                } else {
                    return data;
                }
            }]
        });
        this.instance.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return {...response.data, _response: response};
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        });

    }


    setCookie(cookie: string) {
        if (cookie) {
            this.cookie = cookie.replaceAll("Path=/;", "")
                .replaceAll("HttpOnly;", "")
                .replaceAll("HttpOnly", "")
                .replaceAll("Secure;", "")
                .replaceAll("Secure", "").trim();
            console.log('设置cookie:', this.cookie);
        }
    }

    get<T = any>(url: string, params?: any): Promise<T> {
        return this.instance.get(url, {
            params,
        })
    }

    post<T = any>(url: string, data?: any): Promise<T> {
        return this.instance.post(url, data)
    }

    put<T = any>(url: string, data?: any): Promise<T> {
        return this.instance.put(url, data)
    }

    delete<T = any>(url: string, params?: any): Promise<T> {
        return this.instance.delete(url, {
            params,
        });
    }
}

export const httpClient = new HttpClient();

export default httpClient;
