import axios from '~/api/axios';

const END_POINTS = {
    GET_ALL: 'Slot/GetAll',
    GET_BY_ID: 'Slot/Get',
    UPDATE: 'Slot/Update',
    UPDATE_ADMIN: 'Slot/Admin/Update'
};

export const getAllSlots = () => {
    return axios.get(END_POINTS.GET_ALL);
};

export const getSlotById = (id) => {
    return axios.get(`${END_POINTS.GET_BY_ID}/${id}`);
};

export const getSlotByVehicleTypeId = (id) => {
    return axios.get(`${END_POINTS.GET_ALL}/${id}`);
}

export const updateSlotStatus = (data) => {
    return axios.put(END_POINTS.UPDATE_ADMIN, null, { params: data });
}
