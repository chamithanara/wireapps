import { HttpMethods } from '@app/constants/enums/generic.enums';

import axiosInstance from './axiosInstance';

interface QueryParams {
    [key: string]: string | number | boolean | undefined;
}

export default class BaseApi {
    protected async getAsync<T>(endPoint: string, queryStringParameters?: QueryParams): Promise<T> {
        return this.executeAsync<T>(HttpMethods.Get, endPoint, queryStringParameters);
    }

    protected async postAsync<T>(
        endPoint: string,
        queryStringParameters?: QueryParams,
        data?: unknown
    ): Promise<T> {
        return this.executeAsync<T>(HttpMethods.Post, endPoint, queryStringParameters, data);
    }

    protected async putAsync<T>(
        endPoint: string,
        queryStringParameters?: QueryParams,
        data?: unknown
    ): Promise<T> {
        return this.executeAsync<T>(HttpMethods.Put, endPoint, queryStringParameters, data);
    }

    protected async patchAsync<T>(
        endPoint: string,
        queryStringParameters?: QueryParams,
        data?: unknown
    ): Promise<T> {
        return this.executeAsync<T>(HttpMethods.Patch, endPoint, queryStringParameters, data);
    }

    protected async deleteAsync<T>(
        endPoint: string,
        queryStringParameters?: QueryParams,
        data?: unknown
    ): Promise<T> {
        return this.executeAsync<T>(HttpMethods.Delete, endPoint, queryStringParameters, data);
    }

    // eslint-disable-next-line class-methods-use-this
    protected async executeAsync<T>(
        method: HttpMethods,
        endPoint: string,
        queryStringParameters?: QueryParams,
        data?: unknown
    ): Promise<T> {
        const axiosPromise = await axiosInstance.request<T>({
            method,
            url: endPoint,
            params: queryStringParameters,
            timeout: 45000,
            data
        });

        return axiosPromise.data;
    }
}
