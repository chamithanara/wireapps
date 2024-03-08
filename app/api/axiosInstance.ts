import axios, { AxiosInstance } from 'axios';
import Config from 'react-native-config';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: Config.API_BASE_URL
});

export default axiosInstance;
