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
import Admin from '~/pages/Admin';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '~/context/AuthContextProvider';

function AdminGuard({ children }) {

    const [{ role }] = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (role !== 'Admin') { navigate('/'); }
    }, [role])

    if (role !== 'Admin') return null;
    return children
}
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
    { path: config.routes.admin, component: Admin, guard: AdminGuard },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
