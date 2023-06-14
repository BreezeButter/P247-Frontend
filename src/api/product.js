import axios from './axios';

export const getAllProductDog= async () => {
  return axios.get('/product/dog');
};
export const createProduct= async (input) => {
  return axios.post('/product/build',input);
};

export const getAllProductDogByID = async (id) => {
  return axios.get(`/product/dog/${id}`);
};

export const getAllProductCat= async () => {
  return axios.get('/product/cat');
};

export const getAllProductCatByID = async (id) => {
  return axios.get(`/product/cat/${id}`);
};


