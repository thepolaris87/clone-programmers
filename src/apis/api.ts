import axios from "axios";

// const clinet = axios.create({baseURL:'http://192.168.2.41:9000'})

// axios.defaults.headers.common.Authorization = '9a3lQe3S7QWSr1xeZQvp9';

export const postSignUp = async (body: {
  name: string;
  email: string;
  password: string;
}) => {
  //   return axios.post("http://192.168.2.41:9000/coms/sign-up", body, {headers: {Authorization: '9a3lQe3S7QWSr1xeZQvp9'}}).then((r) => {
  return axios
    .post("http://192.168.2.41:9000/coms/sign-up", body)
    .then((r) => {
      console.log(r);
      return r.data;
    });
};

export const postSignIn = async (body: { email: string; password: string }) => {
  return axios
    .post("http://192.168.2.41:9000/coms/sign-in", body)
    .then((r) => r.data);
};
