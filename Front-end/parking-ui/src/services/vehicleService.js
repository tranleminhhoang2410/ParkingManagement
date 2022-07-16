import axios from '~/api/axios';

const END_POINT = {
    ADD_VEHICLE: 'Vehicle/AddVehicle',
    GET_VEHICLE_BY_USERID: 'Vehicle/Get/UserVehicle',
};

export const enrollVehicle = (vehicle) => {
    return axios.post(END_POINT.ADD_VEHICLE, null, { params: vehicle });
};

export const getVehicleByUserId = (id) => {
    return axios.get(`${END_POINT.GET_VEHICLE_BY_USERID}/${id}`);
};
