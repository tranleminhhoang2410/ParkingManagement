import axios from '~/api/axios';

const END_POINT = {
    ADD_VEHICLE: 'Vehicle/AddVehicle',
    GET_VEHICLE_BY_USER_ID: 'Vehicle/Get/UserVehicle',
    CHECK_IN: 'Vehicle/CheckIn',
    CHECK_OUT: 'Vehicle/CheckOut',
    GET_CHECKED_IN_VEHICLE: 'Vehicle/CheckedIn'
};

export const enrollVehicle = (vehicle) => {
    return axios.post(END_POINT.ADD_VEHICLE, null, { params: vehicle });
};

export const getVehicleByUserId = (id) => {
    return axios.get(`${END_POINT.GET_VEHICLE_BY_USER_ID}/${id}`);
};

export const checkIn = (vehicle) => {
    return axios.post(END_POINT.CHECK_IN, null, { params: vehicle });
};

export const getCheckedInVehicle = (slotId) => {
    return axios.get(`${END_POINT.GET_CHECKED_IN_VEHICLE}/${slotId}`)
}

export const checkOut = (vehicle) => {
    return axios.post(END_POINT.CHECK_OUT, vehicle)
}