import axios from './axios';

export const register = async input => {

     const result = await axios.post('/auth/register', input);
      

     return result
}
export const login = input => axios.post('/auth/login', input);
export const uploadImage = input => axios.put('/auth/upload', input);
export const fetchMe = () => axios.get('/auth/me');
