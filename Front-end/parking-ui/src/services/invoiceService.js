import axios from '~/api/axios';

const END_POINTS = {
    GET_BY_ID: '/Invoice/Get',
    DELETE: 'Invoice/Delete'
};

export const getInvoiceByUserIdApi = (id) => {
    return axios.get(`${END_POINTS.GET_BY_ID}/${id}`);
};

export const deleteInvoiceApi = (id) => {
    return axios.delete(`${END_POINTS.DELETE}/${id}`);
}
