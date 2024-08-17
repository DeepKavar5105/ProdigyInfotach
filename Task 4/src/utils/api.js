import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your API base URL
});

export const login = (username, password) =>
  api.post('/login', { username, password });

export const logout = () => api.post('/logout');

export const fetchUser = () => api.get('/current-user');

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default api;
