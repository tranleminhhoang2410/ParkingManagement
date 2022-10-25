import axios from '~/api/axios';

const END_POINTS = {
    GET_BY_USER_ID: 'Account/GetByUserId'
}

export const getAccountByUserId = (id) => {
    return axios.get(`${END_POINTS.GET_BY_USER_ID}/${id}`)
}