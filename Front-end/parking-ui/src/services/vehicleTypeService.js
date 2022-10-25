import axios from '~/api/axios';

const END_POINTS = {
    GET_ALL: 'VehicleType/GetAll',
};

export const getAllVehicleTypesApi = () => {
    return axios.get(`${END_POINTS.GET_ALL}`);
};
