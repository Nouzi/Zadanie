import axios from "axios";

const instance = axios.create({
    baseURL: 'https://62b1cfb120cad3685c8389b6.mockapi.io/api/v1/Items/'
});

export default instance