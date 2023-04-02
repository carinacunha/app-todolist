import axios from 'axios';

export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = token;
};

export const getData = async (endpoint) => {
  return axios.get(endpoint).then(resp => {
    return resp.data;
  }).catch((response)=> {
    console.log(response)
  });
};

export const postData = async (endpoint, body) => {
  axios.post(endpoint, body).then(resp => {
    console.log(resp.data);
  }).catch((error)=> {
    console.log(error)
  });
};

export const putData = async (endpoint, body) => {
  console.log(endpoint, body);
  axios.put(endpoint, body).then(resp => {
    console.log(resp.data);
  }).catch((error)=> {
    console.log(error)
  });
};

export const deleteData = async (endpoint) => {
  axios.delete(endpoint).then(resp => {
    console.log(resp.data);
  }).catch((error)=> {
    console.log(error)
  });
};