import axios from '~/api/axios';

const END_POINT = {
    GetAll: 'VehicleType/GetAll',
};

export const getAllVehicleTypesApi = () => {
    return axios.get(`${END_POINT.GetAll}`);
};
