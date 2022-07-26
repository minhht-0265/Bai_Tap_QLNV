import axios from 'axios';
import cookies from 'axios/lib/helpers/cookies'
const instance = axios.create({
    baseURL: process.browser
    ? process.env.BROWSER_API_URL
    :process.env.SERVER_API_URL,
    headers:{
        'X-XSRF-TOKEN': cookies.read('XSRF-TOKEN'),
    },

})