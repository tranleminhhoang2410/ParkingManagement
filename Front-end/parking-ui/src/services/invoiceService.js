import axios from '~/api/axios';

const END_POINTS = {
    GET_ALL: '/Invoice/Admin/GetAll',
    GET_BY_ID: '/Invoice/Get',
    DELETE: 'Invoice/Delete',
    GET_HIGHEST_PARKING: 'Invoice/Admin/GetHighestParkingType',
    GET_LASTED_CHECKOUT: 'Invoice/Admin/GetAll',
    GET_MONTHLY_PARKING_TYPE: 'Invoice/Admin/GetMonthlyParkingType',
};

export const getAllInvoices = () => {
    return axios.get(END_POINTS.GET_ALL);
}

export const getInvoiceByUserIdApi = (id) => {
    return axios.get(`${END_POINTS.GET_BY_ID}/${id}`);
};

export const deleteInvoiceApi = (id) => {
    return axios.delete(`${END_POINTS.DELETE}/${id}`);
};

export const getHighestParking = () => {
    return axios.get(END_POINTS.GET_HIGHEST_PARKING);
};

export const getLastedCheckout = () => {
    return axios.get(END_POINTS.GET_LASTED_CHECKOUT);
};

export const getMonthlyParkingType = () => {
    return axios.get(END_POINTS.GET_MONTHLY_PARKING_TYPE);
}
