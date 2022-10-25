import axios from '~/api/axios';

const END_POINTS = {
    GET_ALL: 'VehicleType/GetAll',
    UPDATE_PRICE: 'VehicleType/Update',
};

export const getAllVehicleTypesApi = () => {
    return axios.get(`${END_POINTS.GET_ALL}`);
};

export const updateVehicleTypePrice = (data) => {
    return axios.put(`${END_POINTS.UPDATE_PRICE}`, data);
};
