import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    maxRedirects: 0,
    timeout: 1000,
    headers: {
        // Authorization: `Bearer ${ customFunctionToRetrieveToken() }
    }
});

export default axiosInstance;