import axios from "axios";

//https://cep.awesomeapi.com.br/json/05424020  > utilizando no momento
//https://viacep.com.br/ws/03562050/json  
export const api = axios.create({
    baseURL: 'https://cep.awesomeapi.com.br/json/'
});