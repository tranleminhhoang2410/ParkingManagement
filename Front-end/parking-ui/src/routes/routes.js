import config from '~/config';

//guards
import AdminGuard from '~/components/Guards/AdminGuard';
import UserGuard from '~/components/Guards/UserGuard'

//pages
import Home from '~/pages/Home';
import About from '~/pages/About';
import Price from '~/pages/Price';
import Parking from '~/pages/Parking';
import ParkingDetail from '~/pages/Parking/ParkingDetail';
import Vehicles from '~/pages/Vehicles';
import Profile from '~/pages/Profile';
import Forgot from '~/pages/Security/Forgot';
import ChangePassword from '~/pages/Security/ChangePassword/ChangePassword';
import Invoices from '~/pages/Invoices'
import Admin from '~/pages/Admin';

//layouts
import AdminLayout from '~/layouts/AdminLayout'

const publicRoutes = [
    { path: config.routes.home, component: Home, guard: UserGuard },
    { path: config.routes.about, component: About },
    { path: config.routes.price, component: Price },
    { path: config.routes.parking, component: Parking },
    { path: config.routes.parkingDetail, component: ParkingDetail },
    { path: config.routes.vehicles, component: Vehicles },
    { path: config.routes.enrollVehicle, component: Vehicles },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.invoices, component: Invoices },
    { path: config.routes.forgot, component: Forgot },
    { path: config.routes.changePassword, component: ChangePassword },
    { path: config.routes.admin, component: Admin, guard: AdminGuard, layout: AdminLayout },
];

const protectedRoutes = [];

export { publicRoutes, protectedRoutes };
