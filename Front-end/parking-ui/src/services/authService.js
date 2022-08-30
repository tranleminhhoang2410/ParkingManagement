import axios from '~/api/axios';

const END_POINT = {
    SIGN_IN: 'ParkingManagement/Login',
    SIGN_UP: 'ParkingManagement/SignUp',
    CHANGE_PASSWORD: 'ParkingManagement/ChangePassword',
};

export const signUp = (data) => {
    return axios.post(END_POINT.SIGN_UP, null, { params: data });
};

export const signIn = (data) => {
    return axios.post(END_POINT.SIGN_IN, null, { params: data });
};

export const changePassword = (data) => {
    return axios.put(END_POINT.CHANGE_PASSWORD, null, { params: data });
};
