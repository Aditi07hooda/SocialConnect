import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000/api' });

export const logIn = (formData) => API.post('/social-connect/auth/login', formData); 

export const signUp = (formData) => API.post('/social-connect/auth/register', formData);