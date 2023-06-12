import axios from './axios';


export const addCart = async input =>  await axios.post('/cart/add/', input);

export const fetchCartAll = async () => {
    return axios.get('/cart/all/');
  };
      

