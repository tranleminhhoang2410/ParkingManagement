import { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header () {
    //Icon Besid Login Button
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

    //Custom Style for Modal
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },

        content: {
            width: '25%',
            maxWidth: '100%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'none',
            border: 'none',
        },
    };

    //Modal
    const [isOpen, setIsOpen] = useState(false);

    function openModal () {
        setIsOpen(true);
        toggleTab(1);
    }

    function closeModal () {
        setIsOpen(false);
    }

    //UI Tabs

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>
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
                    <Button className={cx('login-btn')} primary onClick={openModal}>
                        Log in
                    </Button>
                </div>
            </div>

            {/* Modal */}

            <div className={cx('modal')}>
                {isOpen && (
                    <Button className={cx('close-btn')} onClick={closeModal}>
                        <FontAwesomeIcon icon={faXmark} className={cx('close-btn-content')} />
                    </Button>
                )}
                <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
                    {/* UI Tabs */}
                    <div className={cx('tab-title')}>
                        <Button
                            className={toggleState === 1 ? cx('tabs', 'active-tabs') : cx('tabs')}
                            onClick={() => toggleTab(1)}
                        >
                            Log in
                        </Button>
                        <Button
                            className={toggleState === 2 ? cx('tabs', 'active-tabs') : cx('tabs')}
                            onClick={() => toggleTab(2)}
                        >
                            Sign up
                        </Button>
                    </div>
                    <div className={cx('tab-content')}>
                        {/* Login Form */}
                        <div className={toggleState === 1 ? cx('content', 'active-content') : cx('content')}>
                            <form id="login-form" className={cx('main-form')}>
                                <div className={cx('input-group')}>
                                    <label htmlFor="username" className={cx('input-label')}>
                                        Username
                                    </label>
                                    <input type="text" className={cx('input-text')} />
                                </div>
                                <div className={cx('input-group')}>
                                    <label htmlFor="password" className={cx('input-label')}>
                                        Password
                                    </label>
                                    <input type="password" className={cx('input-text')} />
                                </div>
                                <div className={cx('remember-and-forgot')}>
                                    <div className={cx('remember')}>
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember" className={cx('checkbox-label')}>
                                            Remember me
                                        </label>
                                    </div>
                                    <div className={cx('forgot')}>
                                        <Link to="/forgot" onClick={closeModal} className={cx('forgot-link')}>
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <Button className={cx('action-btn')} primary>
                                    Log in
                                </Button>
                            </form>
                        </div>
                        {/* Signup Form */}
                        <div className={toggleState === 2 ? cx('content', 'active-content') : cx('content')}>
                            <form id="signup-form" className={cx('main-form')}>
                                <div className={cx('input-group')}>
                                    <label htmlFor="username" className={cx('input-label')}>
                                        Username
                                    </label>
                                    <input type="text" className={cx('input-text')} />
                                </div>
                                <div className={cx('input-group')}>
                                    <label htmlFor="password" className={cx('input-label')}>
                                        Password
                                    </label>
                                    <input type="password" className={cx('input-text')} />
                                </div>
                                <div className={cx('input-group')}>
                                    <label htmlFor="confirm" className={cx('input-label')}>
                                        Confirm Password
                                    </label>
                                    <input type="password" className={cx('input-text')} />
                                </div>
                                <Button className={cx('action-btn')} primary>
                                    Sign up
                                </Button>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
}

export default Header;
