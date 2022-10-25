const adminRoutes = {
    admin: '/admin',
    adminProfile: '/admin/profile',
    adminVehicles: '/admin/vehicles',
    adminSlots: '/admin/slots',
    adminInvoices: '/admin/invoices',
    adminChangePassword: '/admin/password/change'
};

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
    invoices: '/invoices',
};

export default routes;
