import axios from 'axios';

const HOST = import.meta.env.VITE_API_HOST ?? 'http://192.1.31.79:9000';

export const postSignUp = async (body: { name: string; email: string; password: string }) => {
    return axios.post(`${HOST}/coms/sign-up`, body).then((r) => {
        return r.data;
    });
};

export const postSignIn = async (body: { email: string; password: string }) => {
    return axios.post(`${HOST}/coms/sign-in`, body).then((r) => {
        return r.data;
    });
};

export const getChallenges = async () => {
    return axios.get(`${HOST}/learn/challenges`).then((r) => {
        return r.data;
    });
};

export const getQuestion = async (questionId: string) => {
    return axios.get(`${HOST}/learn/courses/${questionId}`).then((r) => {
        return r.data;
    });
};

export const postSolution = async (body: { questionId: string; userCode: string; status: string }) => {
    return axios
        .post(`${HOST}/learn/courses/${body.questionId}`, {
            userCode: body.userCode,
            status: body.status
        })
        .then((r) => {
            return r.data;
        });
};

export const getQuestionList = async (questionId: string) => {
    return axios.get(`${HOST}/learn/courses/${questionId}/questions`).then((r) => {
        return r.data;
    });
};

export const postQuestion = async (body: { questionId: string; title: string; description: string; showUserCode: string }) => {
    return axios
        .post(`${HOST}/learn/courses/${body.questionId}/questions`, {
            title: body.title,
            description: body.description,
            showUserCode: body.showUserCode
        })
        .then((r) => {
            return r.data;
        });
};

export const getDetailQuestion = async (questionId: string) => {
    return axios.get(`${HOST}/learn/questions/${questionId}`).then((r) => {
        return r.data;
    });
};

export const deleteQuestion = async (questionId: string) => {
    return axios.delete(`${HOST}/learn/courses/${questionId}`).then((r) => {
        return r.data;
    });
};

export const postComment = async (body: { questionId: string; description: string }) => {
    return axios
        .post(`${HOST}/learn/questions/${body.questionId}`, {
            description: body.description
        })
        .then((r) => {
            return r.data;
        });
};

export const deleteComment = async (commentId: number) => {
    return axios.delete(`${HOST}/learn/questions/${commentId}`).then((r) => {
        r.data;
    });
};

export const getSolutions = async (questionId: string) => {
    return axios.get(`${HOST}/learn/solutions/${questionId}`).then((r) => {
        return r.data;
    });
};

export const patchLike = async (body: { questionId: string; userEmail: string }) => {
    return axios
        .patch('${HOST}/learn/solution-like', {
            questionId: body.questionId,
            userEmail: body.userEmail
        })
        .then((r) => {
            return r.data;
        });
};

export const patchUnLike = async (body: { questionId: string; userEmail: string }) => {
    return axios
        .patch('${HOST}/learn/solution-unlike', {
            questionId: body.questionId,
            userEmail: body.userEmail
        })
        .then((r) => {
            return r.data;
        });
};
