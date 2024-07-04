import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000/api' });

export const uploadImage = (data) => API.post('/social-connect/upload/', data);
export const uploadPost = (data) => API.post('/social-connect/post', data);