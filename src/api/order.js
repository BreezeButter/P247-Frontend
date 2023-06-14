import axios from './axios';

export const getAllOrder= async () => {
  return axios.get('/order/admin');
};

export const getAllOrderByUser = async () => {
  return axios.get('/order/user');
};