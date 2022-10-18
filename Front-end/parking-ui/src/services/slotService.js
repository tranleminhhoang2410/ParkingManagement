import axios from '~/api/axios';

const END_POINT = {
    GET_ALL: 'Slot/GetAll',
    GET_BY_ID: 'Slot/Get',
    UPDATE: 'Slot/Update',
    UPDATE_ADMIN: 'Slot/Admin/Update'
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

export const updateSlotStatus = (data) => {
    return axios.put(END_POINT.UPDATE_ADMIN, null, { params: data });
}
