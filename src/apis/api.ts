import { tokenAtom } from '@/atoms/toast';
import axios from 'axios';
import { useAtom } from 'jotai';

// const client = axios.create({ baseURL: 'http://192.1.31.79:9000' });

// axios.defaults.headers.common.Authorization = '6Nz71_NhMJ0AQfa3wemER';

export const postSignUp = async (body: { name: string; email: string; password: string }) => {
    //   return axios.post("http://192.168.2.41:9000/coms/sign-up", body, {headers: {Authorization: '9a3lQe3S7QWSr1xeZQvp9'}}).then((r) => {
    return axios.post('http://192.1.31.79:9000/coms/sign-up', body).then((r) => {
        return r.data;
    });
};

export const postSignIn = async (body: { email: string; password: string }) => {
    return axios.post('http://192.1.31.79:9000/coms/sign-in', body).then((r) => {
        return r.data;
    });
};

export const getQuestion = async (questionId: string) => {
    return axios.get(`http://192.1.31.79:9000/learn/courses/${questionId}`).then((r) => r.data);
};

export const postSolution = async (body: { questionId: string; userCode: string; status: string }) => {
    return axios
        .post(`http://192.1.31.79:9000/learn/courses/${body.questionId}`, {
            userCode: body.userCode,
            status: body.status
        })
        .then((r) => r.data);
};

export const getQuestionList = async (questionId: string) => {
    return axios.get(`http://192.1.31.79:9000/learn/courses/${questionId}/questions`).then((r) => r.data);
};

export const postQuestion = async (body: { questionId: string; title: string; description: string }) => {
    return axios
        .post(`http://192.1.31.79:9000/learn/courses/${body.questionId}/questions`, {
            title: body.title,
            description: body.description
        })
        .then((r) => r.data);
};

export const getDetailQuestion = async (questionId: string) => {
    return axios.get(`http://192.1.31.79:9000/learn/questions/${questionId}`).then((r) => r.data);
};

export const postAnswer = async (body: { questionId: string; description: string }) => {
    return axios
        .post(`http://192.1.31.79:9000/learn/questions/${body.questionId}`, {
            description: body.description
        })
        .then((r) => r.data);
};
