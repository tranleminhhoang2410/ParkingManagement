import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
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
        </div>
    );
}

export default Profile;
