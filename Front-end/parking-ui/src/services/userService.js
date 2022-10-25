import axios from '~/api/axios';

const END_POINTS = {
    GET_BY_ID: 'User/Get/Id',
    GET_LOGGED_USER: 'User/GetLoggedUser',
};

export const getUserById = (userId) => {
    return axios.get(`${END_POINTS.GET_BY_ID}/${userId}`);
};

export const getLoggedUser = () => {
    return axios.get(END_POINTS.GET_LOGGED_USER);
};
