import axios from 'axios';

export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = token;
};

export const getData = (endpoint) => {
  const { data } = axios.get(endpoint).then(resp => {
    console.log(resp.data);
  }).catch((response)=> {
    console.log(response)
  });
  return data;
};

export const postData = async (endpoint, body) => {
  axios.post(endpoint, body).then(resp => {
    console.log(resp.data);
  }).catch((error)=> {
    console.log(error)
  });
};
