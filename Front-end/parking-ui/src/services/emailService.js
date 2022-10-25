import axios from '~/api/axios';

const END_POINTS = {
    FORGOT: '/Email/ForgotPassword',
}

export const forgotPassword = (username) => {
    return axios.post(END_POINTS.FORGOT, null, { params: username })
}