import axios from './axios';


export const register = async input =>  await axios.post('/cart/:id', input);
      

