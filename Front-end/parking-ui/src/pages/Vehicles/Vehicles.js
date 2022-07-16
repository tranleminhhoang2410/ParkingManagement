import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Vehicles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBus, faTruck } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { enrollVehicle, getVehicleByUserId } from './../../services/vehicleService';
import { AuthContext } from '~/context/AuthContextProvider';

const cx = classNames.bind(styles);

function Vehicles () {
    //UI Tabs

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    //Get user Id
    const [authState] = useContext(AuthContext);
    const [vehicles, setVehicles] = useState([]);
    //Enroll Vehicles
    const handleEnrollVehicle = async (event) => {
        event.preventDefault();
        const plate = event.target[0].value;
        const name = event.target[1].value;
        const brand = event.target[2].value;
        const typeId = event.target[3].value;
        // const type = event.target[3].value;
        // console.log({
        //     plate,
        //     name,
        //     brand,
        //     type,
        // });
        await enrollVehicle({
            userID: authState.user.id,
            vehicleId: plate,
            name: name,
            brand: brand,
            typeId: typeId,
        });
        const vehicles = await getVehicleByUserId(authState.user.id);
        setVehicles(vehicles);
        setToggleState(1);
    };

    useEffect(async () => {
        const vehicles = await getVehicleByUserId(authState.user.id);
        setVehicles(vehicles);
    }, []);
    const getIconOfVehicle = (id) => {
        console.log(id);
        switch (id) {
            case 1:
                return faCar;
            case 2:
                return faBus;
            case 3:
                return faTruck;
            default:
                return;
        }
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
                            {vehicles.map((vehicle) => (
                                <li key={vehicle.id} className={cx('vehicle-item')}>
                                    <div className={cx('vehicle-wrapper')}>
                                        <div className={cx('vehicle-avatar')}>
                                            <FontAwesomeIcon icon={getIconOfVehicle(vehicle.vehicleType.id)} />
                                        </div>
                                        <div className={cx('vehicle-info')}>
                                            <span className={cx('vehicle-brand')}>{vehicle.vehicleBrand}</span>
                                            <span className={cx('vehicle-name')}>{vehicle.vehicleName}</span>
                                            <span className={cx('vehicle-registrationPlate')}>{vehicle.id}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            ;
                        </ul>
                    </div>
                </div>
                {/* ENROLL VEHICLE Form */}
                <div className={toggleState === 2 ? cx('content', 'active-content') : cx('content')}>
                    <form id="vehicle-enroll-form" className={cx('vehicle-enroll-form')} onSubmit={handleEnrollVehicle}>
                        <div className={cx('input-group')}>
                            <label htmlFor="registrationPlate" className={cx('input-label')}>
                                Vehicle's Registration Plate
                            </label>
                            <input type="text" className={cx('input-text')} id="registrationPlate" />
                        </div>
                        <div className={cx('input-group')}>
                            <label htmlFor="name" className={cx('input-label')}>
                                Vehicle's Name
                            </label>
                            <input type="text" className={cx('input-text')} id="name" />
                        </div>
                        <div className={cx('input-group')}>
                            <label htmlFor="brand" className={cx('input-label')}>
                                Vehicle's Brand
                            </label>
                            <input type="text" className={cx('input-text')} id="brand" />
                        </div>
                        <div className={cx('input-group')}>
                            <label htmlFor="type" className={cx('input-label')}>
                                Vehicle's Type
                            </label>
                            <select name="" id="">
                                <option value="1">Car</option>
                                <option value="2">Bus</option>
                                <option value="3">Truck</option>
                            </select>
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
