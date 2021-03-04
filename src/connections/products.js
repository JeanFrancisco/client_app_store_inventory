import httpRequestClient from '../config/axios';

export function submitRequestToCreateProduct(data) {
    return httpRequestClient.post('/products', data);
}

export function sendInquiryToGetProducts(params) {
    return httpRequestClient.get('/products', params);
}