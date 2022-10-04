const adminRoutes = {
    admin: '/admin',
}

const routes = {
    ...adminRoutes,
    home: '/',
    about: '/about',
    price: '/price',
    parking: '/parking',
    parkingDetail: '/parking/:id',
    vehicles: '/vehicles',
    enrollVehicle: '/vehicles/enroll',
    profile: '/profile',
    forgot: '/forgot',
    changePassword: '/password/change',
    invoices: '/invoices'
};

export default routes;
