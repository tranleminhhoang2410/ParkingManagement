const adminRoutes = {
    admin: '/admin',
    adminProfile: '/admin/profile',
    adminVehicles: '/admin/vehicles',
    adminSlots: '/admin/slots',
    adminInvoices: '/admin/invoices',
    adminChangePassword: '/admin/password/change',
    adminNotFound: '/admin/*',
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
    forgotPassword: '/password/forgot',
    changePassword: '/password/change',
    resetPassword: '/password/reset',
    invoices: '/invoices',
    notFound: '*',
};

export default routes;
