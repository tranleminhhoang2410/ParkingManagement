import { useContext, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faUser, faRightFromBracket, faKey, faReceipt } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

import { getAccountByUserId } from '~/services/accountService';
import { signIn, signUp } from '~/services/authService';
import { getLoggedUser } from '~/services/userService';

import { AuthContext, AUTH_ACTION } from '~/context/AuthContextProvider';

import { parseJwt } from '~/utils/jwt';
import { LS } from '~/utils/localStorage';

import config from '~/config';

const cx = classNames.bind(styles);

function Header() {
    //To be Better, handle this logic from other component, not UI like Header
    const [authState, dispatch] = useContext(AuthContext);
    const [account, setAccount] = useState(null);
    const {
        isLoggedIn,
        // user: { name: account },
        openAuthModal,
    } = authState;
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    //validate form

    //User menu
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Profile',
            to: authState.role !== config.roles.ADMIN ? '/profile' : '/admin/profile',
        },
        authState.role !== config.roles.ADMIN && {
            icon: <FontAwesomeIcon icon={faReceipt} />,
            title: 'Invoices',
            to: '/invoices',
        },
        {
            icon: <FontAwesomeIcon icon={faKey} />,
            title: 'Change Password',
            to: '/password/change',
        },
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            logout: handleLogout,
        },
    ];

    //Icon Beside Login Button
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
    function openModal() {
        dispatch({ type: AUTH_ACTION.OPEN_MODAL });
        toggleTab(1);
    }

    function closeModal() {
        dispatch({ type: AUTH_ACTION.CLOSE_MODAL });
    }

    //UI Tabs

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    //handle auth
    useEffect(() => {
        const authData = LS.getLocalStorage('auth');
        if (!authData) return;
        const { jwt, user } = authData;
        const expiredTime = new Date(jwt.expired * 1000).getTime();
        const currentTime = new Date().getTime();
        if (currentTime < expiredTime) {
            dispatch({
                type: AUTH_ACTION.LOGIN,
                payload: {
                    jwt,
                    user,
                },
            });
        } else {
            dispatch({ type: AUTH_ACTION.LOGOUT });
            LS.removeLocalStorage('auth');
        }
        return () => {};
    }, [dispatch]);

    //get account of user
    useEffect(() => {
        if (!authState.user.id) return;
        const getAccount = async () => {
            const account = await getAccountByUserId(authState.user.id);
            setAccount(account);
        };
        try {
            getAccount();
        } catch (error) {
            console.log('ERROR');
        }
    }, [authState.user.id]);

    async function handleSignIn(e) {
        e.preventDefault();
        const [{ value: username }, { value: password }] = e.target;
        const data = { username, password };
        try {
            const response = await signIn(data);
            const token = response.token;
            if (!token) return;

            const result = parseJwt(token);
            const jwt = {
                token: token,
                expired: result.exp,
            };
            const authData = { jwt, user: {}, role: result.role };
            LS.setLocalStorage('auth', authData);
            const user = await getLoggedUser();
            authData.user = user;
            dispatch({
                type: AUTH_ACTION.LOGIN,
                payload: authData,
            });

            if (result.role === config.roles.ADMIN) navigate('/admin');
            LS.setLocalStorage('auth', authData);
            setErrorMsg('');
            closeModal();
        } catch (err) {
            setErrorMsg(err);
        }
    }

    async function handleSignUp(e) {
        e.preventDefault();
        const [
            { value: username },
            { value: fullname },
            { value: email },
            { value: phone },
            { value: password },
            { value: ConfirmPassword },
        ] = e.target;
        const data = { username, fullname, email, phone, password, ConfirmPassword };
        try {
            await signUp(data);
            toggleTab(1);
        } catch (err) {
            setErrorMsg(err);
        }
    }

    function handleLogout() {
        dispatch({ type: AUTH_ACTION.LOGOUT });
        LS.removeLocalStorage('auth');
        navigate('/');
    }

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('logo-and-nav')}>
                    <div className={cx('logo')}>
                        <h3>Logo</h3>
                    </div>
                    <nav className={cx('nav-link')}>
                        <Link
                            className={cx('nav-link-item')}
                            to={authState.role === config.roles.ADMIN ? '/admin' : '/'}
                        >
                            Home
                        </Link>
                        {authState.role !== config.roles.ADMIN ? (
                            <Link className={cx('nav-link-item')} to="/about">
                                About Us
                            </Link>
                        ) : (
                            <>
                                <Link className={cx('nav-link-item')} to="/admin/regulations">
                                    Regulations
                                </Link>
                                <Link className={cx('nav-link-item')} to="/admin/slots">
                                    Slots
                                </Link>
                                <Link className={cx('nav-link-item')} to="/admin/invoices">
                                    Invoices
                                </Link>
                            </>
                        )}

                        <span className={cx('nav-link-item')} style={{ cursor: 'pointer' }}>
                            Notifications
                        </span>
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
                    {isLoggedIn ? (
                        <Menu items={userMenu}>
                            <div className={cx('login-action')}>
                                <span className={cx('username-txt')}>{account?.username}</span>
                                <FontAwesomeIcon icon={faUser} className={cx('user-icon')} />
                            </div>
                        </Menu>
                    ) : (
                        <Button className={cx('login-btn')} primary onClick={openModal}>
                            Log in
                        </Button>
                    )}
                </div>
            </div>

            {/* Modal */}

            <div className={cx('modal')}>
                {openAuthModal && (
                    <Button className={cx('close-btn')} onClick={closeModal}>
                        <FontAwesomeIcon icon={faXmark} className={cx('close-btn-content')} />
                    </Button>
                )}
                <Modal
                    ariaHideApp={false}
                    isOpen={openAuthModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    onAfterClose={() => setErrorMsg('')}
                >
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
                            <form id="login-form" className={cx('main-form')} onSubmit={handleSignIn}>
                                <div className={cx('input-group')}>
                                    <label htmlFor="username" className={cx('input-label')}>
                                        Username
                                    </label>
                                    <input type="text" className={cx('input-text')} />
                                    <p className={cx('error-message')}>{errorMsg}</p>
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
                                <Button className={cx('action-btn')} primary type="submit">
                                    Log in
                                </Button>
                            </form>
                        </div>
                        {/* Signup Form */}
                        <div className={toggleState === 2 ? cx('content', 'active-content') : cx('content')}>
                            <form id="signup-form" className={cx('main-form')} onSubmit={handleSignUp}>
                                <div className={cx('input-group')}>
                                    <label htmlFor="username" className={cx('input-label')}>
                                        Username
                                    </label>
                                    <input type="text" className={cx('input-text')} />
                                </div>
                                <div className={cx('input-group')}>
                                    <label htmlFor="full-name" className={cx('input-label')}>
                                        Full name
                                    </label>
                                    <input type="text" className={cx('input-text')} />
                                </div>
                                <div className={cx('input-group')}>
                                    <label htmlFor="email" className={cx('input-label')}>
                                        Email
                                    </label>
                                    <input type="email" className={cx('input-text')} />
                                </div>
                                <div className={cx('input-group')}>
                                    <label htmlFor="username" className={cx('input-label')}>
                                        Phone
                                    </label>
                                    <input type="tel" className={cx('input-text')} />
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
                                <Button className={cx('action-btn')} primary type="submit">
                                    Sign up
                                </Button>
                            </form>
                        </div>
                    </div>
                    {/* PLEASE CUSTOM CSS FOR THIS MESSAGE */}
                    <div style={{ color: 'red' }}>{errorMsg.toString()}</div>
                </Modal>
            </div>
        </>
    );
}

export default Header;
