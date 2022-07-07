import axios from '~/api/axios';

const END_POINT = {
    SIGN_IN: 'ParkingManagement/Login',
    SIGN_UP: 'ParkingManagement/SignUp',
};

export const signUp = (data) => {
    return axios.post(END_POINT.SIGN_UP, null, { params: data });
};

export const signIn = (data) => {
    return axios.post(END_POINT.SIGN_IN, null, { params: data });
};
