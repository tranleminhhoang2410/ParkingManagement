import config from '~/config';

//pages
import Home from '~/pages/Home';
import Price from '~/pages/Price';
import Parking from '~/pages/Parking';
import Feedback from '~/pages/Feedback';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.price, component: Price },
    { path: config.routes.parking, component: Parking },
    { path: config.routes.feedback, component: Feedback },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
