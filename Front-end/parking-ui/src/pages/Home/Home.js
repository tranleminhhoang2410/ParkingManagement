import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

import { faSquareParking, faMoneyCheckDollar, faCar } from '@fortawesome/free-solid-svg-icons';

import NavItems from '~/components/NavItem';

import { useContext } from 'react';
import { AuthContext, AUTH_ACTION } from '~/context/AuthContextProvider';

const cx = classNames.bind(styles);

function Home() {
    const [authState, dispatch] = useContext(AuthContext);
    const { isLoggedIn } = authState;

    const menuItems = [
        {
            icon: faSquareParking,
            title: 'Parking Lot',
            description: 'Wide parking lot, suitable for many types of vehicles',
            to: '/parking',
        },
        {
            icon: faMoneyCheckDollar,
            title: 'Pricing',
            description: 'Price for hours, days, weeks',
            to: '/price',
        },
        {
            icon: faCar,
            title: 'Vehicles',
            description: 'Manage your vehicles in parking area',
            to: isLoggedIn && '/vehicles',
            onClick: () => !isLoggedIn && dispatch({ type: AUTH_ACTION.OPEN_MODAL }),
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-wrapper')}>
                <img src={require('~/assets/images/logo.png')} alt="logo" />
            </div>
            <div className={cx('nav-item-list')}>
                {menuItems.map((menuItem, index) => (
                    <Link key={index} to={menuItem.to} onClick={menuItem.onClick}>
                        <NavItems icon={menuItem.icon} title={menuItem.title} description={menuItem.description} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
