import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <FontAwesomeIcon icon={faUser} className={cx('user-icon')} />
                <span className={cx('account')}>username</span>
            </div>
            <div className={cx('info')}>
                <form id={cx('info-form')}>
                    <div className={cx('input-group')}>
                        <label htmlFor="fullname" className={cx('input-label')}>
                            Full name
                        </label>
                        <input type="text" name="fullname" id="fullname" className={cx('input-text')} />
                    </div>
                    <div className={cx('input-group')}>
                        <label htmlFor="email" className={cx('input-label')}>
                            Email
                        </label>
                        <input type="email" name="email" id="email" className={cx('input-text')} />
                    </div>
                    <div className={cx('input-group')}>
                        <label htmlFor="phone" className={cx('input-label')}>
                            Phone
                        </label>
                        <input type="text" name="phone" id="phone" className={cx('input-text')} />
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
                                <input type="text" name="street" id="street" className={cx('street-txt')} />
                            </div>
                            <div className={cx('city')}>
                                <label htmlFor="city" className={cx('city-label')}>
                                    City
                                </label>
                                <select name="city" id="city">
                                    <option value="">Đà Nẵng</option>
                                </select>
                            </div>
                            <div className={cx('district')}>
                                <label htmlFor="district" className={cx('district-label')}>
                                    District
                                </label>
                                <select name="district" id="district">
                                    <option value="">Thanh Khê</option>
                                </select>
                            </div>
                            <div className={cx('ward')}>
                                <label htmlFor="ward" className={cx('ward-label')}>
                                    Ward
                                </label>
                                <select name="ward" id="ward">
                                    <option value="">An Khê</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;
