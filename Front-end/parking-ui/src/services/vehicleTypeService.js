import axios from '~/api/axios';

const END_POINT = {
    GET_ALL: 'VehicleType/GetAll',
};

export const getAllVehicleTypesApi = () => {
    return axios.get(`${END_POINT.GET_ALL}`);
};
