import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000/api' });


API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})


export const getUser = (userId) => API.get(`/social-connect/user/${userId}`);

export const updateUser = (id, formData) => API.put(`/social-connect/user/${id}`, formData);

export const getAllUser = () => API.get('/social-connect/user');

export const followUser = (id, data) => API.put(`/social-connect/user/${id}/follow`, data);

export const unFollowUser = (id, data) => API.put(`/social-connect/user/${id}/unfollow`, data);