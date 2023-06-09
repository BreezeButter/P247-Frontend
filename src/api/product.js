import axios from './axios';

export const getAllProductDog= async () => {
  return axios.get('/product/dog');
};

export const getAllProductCat= async () => {
  return axios.get('/product/cat');
};


