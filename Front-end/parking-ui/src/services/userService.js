import axios from '~/api/axios';

const END_POINTS = {
    GET_BY_ID: 'User/Get/Id',
    GET_LOGGED_USER: 'User/GetLoggedUser',
    UPDATE_PROFILE: '/User/Update',
};

export const getUserById = (userId) => {
    return axios.get(`${END_POINTS.GET_BY_ID}/${userId}`);
};

export const getLoggedUser = () => {
    return axios.get(END_POINTS.GET_LOGGED_USER);
};

export const updateProfile = (data) => {
    return axios.put(END_POINTS.UPDATE_PROFILE, data);
};
