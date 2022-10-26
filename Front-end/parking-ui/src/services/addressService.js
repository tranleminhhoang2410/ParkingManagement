import axios from '~/api/axios';

const END_POINTS = {
    GET_ALL_CITIES: '/City/GetAll',
    GET_DISTRICT_BY_CITY: '/District/Get/CityId',
    GET_WARD_BY_DISTRICT: '/Ward/Get/DistrictId',
};

export const getAllCities = () => {
    return axios.get(END_POINTS.GET_ALL_CITIES);
};

export const getDistrictByCity = (cityId) => {
    return axios.get(`${END_POINTS.GET_DISTRICT_BY_CITY}/${cityId}`);
};

export const getWardByDistrict = (districtId) => {
    return axios.get(`${END_POINTS.GET_WARD_BY_DISTRICT}/${districtId}`);
};
