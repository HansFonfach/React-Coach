import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://back-coach.onrender.com/api',
    withCredentials: true
})

export default instance;