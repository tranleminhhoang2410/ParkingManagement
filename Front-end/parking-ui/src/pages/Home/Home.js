import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

import { faSquareParking, faMoneyCheckDollar, faCommentDots } from '@fortawesome/free-solid-svg-icons';

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
            description: 'Price for hours, months, years',
            to: '/price',
        },
        {
            icon: faCommentDots,
            title: 'Vehicles',
            description: 'Manage your vehicles in parking area',
            to: isLoggedIn && '/vehicles',
            onClick: () => !isLoggedIn && dispatch({ type: AUTH_ACTION.OPEN_MODAL }),
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('introduction')}>
                <h2 className={cx('introduction-title')}>Parallel</h2>
                <p className={cx('introduction-description')}>
                    Sample text. Click to select text box. Click again or double click to start editing the text
                </p>
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
