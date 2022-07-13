import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Vehicles.module.scss';

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
                    <h1>MY VEHICLE</h1>
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
