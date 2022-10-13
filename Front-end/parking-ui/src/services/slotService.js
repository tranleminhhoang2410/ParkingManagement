import axios from '~/api/axios';

const END_POINT = {
    GET_ALL: 'Slot/GetAll',
    GET_BY_ID: 'Slot/Get',
};

export const getAllSlots = () => {
    return axios.get(END_POINT.GET_ALL);
};

export const getSlotById = (id) => {
    return axios.get(`${END_POINT.GET_BY_ID}/${id}`);
};

export const getSlotByVehicleTypeId = (id) => {
    return axios.get(`${END_POINT.GET_ALL}/${id}`);
}
