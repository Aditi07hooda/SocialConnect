import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000/api' });

export const getTimelinePosts = (id) => API.get(`/social-connect/post/${id}/timeline`);
export const likePost = (id, userId) => API.put(`/social-connect/post/${id}/like_dislike`, { userId: userId })