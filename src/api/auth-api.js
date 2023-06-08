import axios from './axios';

export const register = async input => {
    // console.log('Axios input',input)
     const result = await axios.post('/auth/register', input);
      
    //  console.log('Axios result',result)
     return result
}
export const login = input => axios.post('/auth/login', input);
export const fetchMe = () => axios.get('/auth/me');
