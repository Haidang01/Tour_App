import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}
    `;
  }
  return req;

})


export const signIn = (FormData) => API.post('/api/v1/login', FormData);
export const signUp = (FormData) => API.post('/api/v1/register', FormData);


export const createTour = (tourData) => API.post('/api/v1/createTour', tourData);
export const getTours = () => API.get('/api/v1/getTours');
export const getTour = (id) => API.get(`/api/v1/getTour/${id}`);
export const deleteTour = (id) => API.delete(`/api/v1/deleteTour/${id}`);
export const updateTour = (id, updateTourData) => API.put(`/api/v1/updateTour/${id}`, updateTourData);
export const getToursByUser = (userId) => API.get(`/api/v1/userTours/${userId}`);

