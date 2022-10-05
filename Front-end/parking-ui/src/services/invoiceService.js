import axios from '~/api/axios';

const END_POINTS = {
    GET_BY_ID: '/Invoice/Get',
};

export const getInvoiceByUserIdApi = (id) => {
    return axios.get(`${END_POINTS.GET_BY_ID}/${id}`);
};
