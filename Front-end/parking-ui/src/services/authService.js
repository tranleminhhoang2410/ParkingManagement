import axios from '~/api/axios';

const END_POINTS = {
    SIGN_IN: 'ParkingManagement/Login',
    SIGN_UP: 'ParkingManagement/SignUp',
    CHANGE_PASSWORD: 'ParkingManagement/ChangePassword',
    FORGOT_PASSWORD_USER: 'ParkingManagement/ForgotPasswordUser',
    RESET_PASSWORD: '/ParkingManagement/ForgotPassword',
};

export const signUp = (data) => {
    return axios.post(END_POINTS.SIGN_UP, null, { params: data });
};

export const signIn = (data) => {
    return axios.post(END_POINTS.SIGN_IN, null, { params: data });
};

export const changePassword = (data) => {
    return axios.put(END_POINTS.CHANGE_PASSWORD, null, { params: data });
};

export const forgotPasswordUser = (token) => {
    return axios.get(END_POINTS.FORGOT_PASSWORD_USER, { params: token });
}

export const resetPassword = (data) => {
    return axios.put(END_POINTS.RESET_PASSWORD, null, { params: data });
}
