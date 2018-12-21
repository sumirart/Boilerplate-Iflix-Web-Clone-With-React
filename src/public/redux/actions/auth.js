import axios from 'axios';

const IP = "http://68.183.177.9:3333/user/";

export const login = (user) => ({
    type : 'LOGIN',
    payload : axios.post(IP + 'login', user)
});

export const register = (user) => ({
    type : 'REGISTER',
    payload : axios.post(IP + 'register', user)
});

export const logout = () => ({
    type : 'LOGOUT'
});