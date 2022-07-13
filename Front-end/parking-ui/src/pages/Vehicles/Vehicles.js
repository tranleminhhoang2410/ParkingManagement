import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Vehicles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBus, faTruck } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Vehicles () {
    //UI Tabs

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className={cx('wrapper')}>
            {/* UI Tabs */}
            <div className={cx('tab-title')}>
                <Button
                    className={toggleState === 1 ? cx('tabs', 'active-tabs') : cx('tabs')}
                    onClick={() => toggleTab(1)}
                    primary
                >
                    My Vehicles
                </Button>
                <Button
                    className={toggleState === 2 ? cx('tabs', 'active-tabs') : cx('tabs')}
                    onClick={() => toggleTab(2)}
                    primary
                >
                    Enroll a vehicle
                </Button>
            </div>
            <div className={cx('tab-content')}>
                {/* My Vehicles */}
                <div className={toggleState === 1 ? cx('content', 'active-content') : cx('content')}>
                    {/* Don't have vehicle */}
                    {/* <div className={cx('no-vehicle')}>
                        <h1 className={cx('no-vehicle-notification')}>You don't have any vehicle yet</h1>
                    </div> */}
                    {/* Have Vehicles */}
                    <div className={cx('vehicle')}>
                        <ul className={cx('vehicle-list')}>
                            <li className={cx('vehicle-item')}>
                                <div className={cx('vehicle-wrapper')}>
                                    <div className={cx('vehicle-avatar')}>
                                        <FontAwesomeIcon icon={faCar} />
                                    </div>
                                    <div className={cx('vehicle-info')}>
                                        <span className={cx('vehicle-brand')}>Chervrolet</span>
                                        <span className={cx('vehicle-name')}>Spark</span>
                                        <span className={cx('vehicle-registrationPlate')}>43A-22222</span>
                                    </div>
                                </div>
                            </li>
                            <li className={cx('vehicle-item')}>
                                <div className={cx('vehicle-wrapper')}>
                                    <div className={cx('vehicle-avatar')}>
                                        <FontAwesomeIcon icon={faBus} />
                                    </div>
                                    <div className={cx('vehicle-info')}>
                                        <span className={cx('vehicle-brand')}>Chervrolet</span>
                                        <span className={cx('vehicle-name')}>Spark</span>
                                        <span className={cx('vehicle-registrationPlate')}>43A-22222</span>
                                    </div>
                                </div>
                            </li>
                            <li className={cx('vehicle-item')}>
                                <div className={cx('vehicle-wrapper')}>
                                    <div className={cx('vehicle-avatar')}>
                                        <FontAwesomeIcon icon={faTruck} />
                                    </div>
                                    <div className={cx('vehicle-info')}>
                                        <span className={cx('vehicle-brand')}>Chervrolet</span>
                                        <span className={cx('vehicle-name')}>Spark</span>
                                        <span className={cx('vehicle-registrationPlate')}>43A-22222</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* ENROLL VEHICLE Form */}
                <div className={toggleState === 2 ? cx('content', 'active-content') : cx('content')}>
                    <form id="vehicle-enroll-form" className={cx('vehicle-enroll-form')}>
                        <div className={cx('input-group')}>
                            <label htmlFor="registrationPlate" className={cx('input-label')}>
                                Vehicle's Registration Plate
                            </label>
                            <input type="text" className={cx('input-text')} />
                        </div>
                        <div className={cx('input-group')}>
                            <label htmlFor="name" className={cx('input-label')}>
                                Vehicle's Name
                            </label>
                            <input type="text" className={cx('input-text')} />
                        </div>
                        <div className={cx('input-group')}>
                            <label htmlFor="name" className={cx('input-label')}>
                                Vehicle's Brand
                            </label>
                            <input type="text" className={cx('input-text')} />
                        </div>
                        <div className={cx('input-group')}>
                            <label htmlFor="name" className={cx('input-label')}>
                                Vehicle's Type
                            </label>
                            <input type="text" className={cx('input-text')} />
                        </div>
                        <Button className={cx('action-btn')} primary>
                            Enroll a vehicle
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Vehicles;
