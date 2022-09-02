import axios from '~/api/axios';

const END_POINT = {
    GET_BY_USER_ID: 'Account/GetByUserId'
}

export const getAccountByUserId = (id) => {
    return axios.get(`${END_POINT.GET_BY_USER_ID}/${id}`)
}