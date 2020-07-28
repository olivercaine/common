import { fetch, Request } from 'cross-fetch';

// Based on https://www.carlrippon.com/fetch-with-async-await-and-typescript/

async function http<T>(request: RequestInfo): Promise<IHttpResponse<T>> {
    const response: IHttpResponse<T> = await fetch(request);
    try { // May error if there's no body
        response.parsedBody = await response.json();
    } catch (ex) {
        throw new Error('No body in response');
    }
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

export interface IHttpResponse<T> extends Response { parsedBody?: T; }

// CRUD
export async function get<T>(
    path: string,
    args: RequestInit = { method: 'get' },
): Promise<IHttpResponse<T>> {
    return http<T>(new Request(path, args));
}

export async function post<T>(
    path: string,
    body: any,
    args: RequestInit = { method: 'post', body: JSON.stringify(body) },
): Promise<IHttpResponse<T>> {
    return http<T>(new Request(path, args));
}

export async function put<T>(
    path: string,
    body: any,
    args: RequestInit = { method: 'put', body: JSON.stringify(body) },
): Promise<IHttpResponse<T>> {
    return http<T>(new Request(path, args));
}

export async function del<T>(
    path: string,
    body: any,
    args: RequestInit = { method: 'delete', body: JSON.stringify(body) },
): Promise<IHttpResponse<T>> {
    return http<T>(new Request(path, args));
}
