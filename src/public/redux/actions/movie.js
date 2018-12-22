import axios from 'axios';

const IP = "http://68.183.177.9:3333/movies/cached?page=";

export const fetchAll = (page) => ({
    type : 'FETCH_ALL',
    payload : axios.get(IP + page)
});