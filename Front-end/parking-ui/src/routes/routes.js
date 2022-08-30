import config from '~/config';

//pages
import Home from '~/pages/Home';
import Price from '~/pages/Price';
import Parking from '~/pages/Parking';
import ParkingDetail from '~/pages/Parking/ParkingDetail';
import Vehicles from '~/pages/Vehicles';
import Profile from '~/pages/Profile';
import Forgot from '~/pages/Security/Forgot';
import ChangePassword from '~/pages/Security/ChangePassword/ChangePassword';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.price, component: Price },
    { path: config.routes.parking, component: Parking },
    { path: config.routes.parkingDetail, component: ParkingDetail },
    { path: config.routes.vehicles, component: Vehicles },
    { path: config.routes.enrollVehicle, component: Vehicles },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.forgot, component: Forgot },
    { path: config.routes.changePassword, component: ChangePassword },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
