const adminRoutes = {
    admin: '/admin',
    adminProfile: '/admin/profile',
    adminRegulations: '/admin/regulations',
    adminSlots: '/admin/slots',
    adminInvoices: '/admin/invoices'
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
