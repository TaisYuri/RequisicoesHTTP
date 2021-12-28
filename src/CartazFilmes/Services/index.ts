import axios from 'axios';

// api: https://sujeitoprogramador.com/r-api/?api=filmes
export const Api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});