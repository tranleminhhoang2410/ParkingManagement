import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header () {
    const socialIcons = [
        {
            name: faFacebookSquare,
            color: '#3B5998',
        },
        {
            name: faTwitterSquare,
            color: '#55ACEE',
        },
        {
            name: faInstagramSquare,
            color: '#C536A4',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-and-nav')}>
                <div className={cx('logo')}>
                    <h3>Logo</h3>
                </div>
                <nav className={cx('nav-link')}>
                    <Link className={cx('nav-link-item')} to="/">
                        Home
                    </Link>
                    <Link className={cx('nav-link-item')} to="/">
                        About Us
                    </Link>
                    <Link className={cx('nav-link-item')} to="/">
                        Notifications
                    </Link>
                </nav>
            </div>
            <div className={cx('social-and-login')}>
                <nav className={cx('nav-social')}>
                    {socialIcons.map((socialIcon, index) => {
                        return (
                            <Link key={index} to="/" className={cx('social-link')}>
                                <FontAwesomeIcon
                                    icon={socialIcon.name}
                                    className={cx('social-icon')}
                                    style={{ color: socialIcon.color }}
                                />
                            </Link>
                        );
                    })}
                </nav>
                <Button className={cx('login-btn')} primary>
                    Log in
                </Button>
            </div>
        </div>
    );
}

export default Header;
