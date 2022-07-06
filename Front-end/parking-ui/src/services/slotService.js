import axios from '~/api/axios';

const END_POINT = {
    GetAll: 'Slot/GetAll',
};

export const getAllSlotsApi = () => {
    return axios.get(`${END_POINT.GetAll}`);
};
