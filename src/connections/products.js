import httpRequestClient from '../config/axios';

export function submitRequestToCreateProduct(data) {
    return httpRequestClient.post('/products', data);
}