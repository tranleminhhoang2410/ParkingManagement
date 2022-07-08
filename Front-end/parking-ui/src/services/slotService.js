import axios from '~/api/axios';

const END_POINT = {
    GetAll: 'Slot/GetAll',
    GetById: 'Slot/Get',
};

export const getAllSlotsApi = () => {
    return axios.get(`${END_POINT.GetAll}`);
};

export const getSlotById = (id) => {
    return axios.get(`${END_POINT.GetById}/${id}`);
};
