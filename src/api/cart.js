import axios from './axios';


export const addCart = async input =>  await axios.post('/cart/add/', input);
export const increment = async input =>  await axios.patch('/cart/add/increment/',input);
export const decrement = async input =>  await axios.patch('/cart/add/decrement/',input);

export const delProduct = async (input)=>{
  console.log('axiosssss',input)
  return await axios.post('/cart/del/', input);
}

export const fetchCartAll = async () => {
    return axios.get('/cart/all/');
  };
      

