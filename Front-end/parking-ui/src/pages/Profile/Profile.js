import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import Button from '~/components/Button';

import { getLoggedUser } from '~/services/userService';

const cx = classNames.bind(styles);

function Profile() {
    const [user, setUser] = useState({});
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    useEffect(() => {
        const fetchCurrentUser = async () => {
            const user = await getLoggedUser();
            setUser(user);
            setFullname(user.name);
            setEmail(user.email);
            setPhone(user.phone);
        };
        fetchCurrentUser();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <form id={cx('info-form')}>
                <div className={cx('input-group')}>
                    <label htmlFor="fullname" className={cx('input-label')}>
                        Full name
                    </label>
                    <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        className={cx('input-text')}
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </div>
                <div className={cx('input-group')}>
                    <label htmlFor="email" className={cx('input-label')}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className={cx('input-text')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={cx('input-group')}>
                    <label htmlFor="phone" className={cx('input-label')}>
                        Phone
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        className={cx('input-text')}
                        value={phone}
                        onChage={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={cx('input-group')}>
                    <label htmlFor="address" className={cx('input-label')}>
                        Address
                    </label>
                    <div className={cx('address-info')}>
                        <div className={cx('street')}>
                            <label htmlFor="street" className={cx('street-label')}>
                                Street
                            </label>
                            <input
                                type="text"
                                name="street"
                                id="street"
                                className={cx('street-txt')}
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                        </div>
                        <div className={cx('city')}>
                            <label htmlFor="city" className={cx('city-label')}>
                                City
                            </label>
                            <select name="city" id="city" className={cx('city-txt')}>
                                <option value="">--Select a city--</option>
                            </select>
                        </div>
                        <div className={cx('district')}>
                            <label htmlFor="district" className={cx('district-label')}>
                                District
                            </label>
                            <select name="district" id="district" className={cx('district-txt')}>
                                <option value="">--Select a district--</option>
                            </select>
                        </div>
                        <div className={cx('ward')}>
                            <label htmlFor="ward" className={cx('ward-label')}>
                                Ward
                            </label>
                            <select name="ward" id="ward" className={cx('ward-txt')}>
                                <option value="">--Select a ward--</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Button primary className={cx('update-btn')}>
                    update
                </Button>
            </form>
        </div>
    );
}

export default Profile;
