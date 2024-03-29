import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Vehicles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBus, faTruck, faMagnifyingGlass, faCheck, faX } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

import { getVehicleByTypeId } from '~/services/vehicleService';

const cx = classNames.bind(styles);

function Vehicles() {
    const [tab, setTab] = useState(1);
    const [vehicles, setVehicles] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const vehiclesRef = useRef(null);
    const debounceTimeoutRef = useRef(null);

    useEffect(() => {
        const fetchVehicleByTypeId = async () => {
            const vehicles = await getVehicleByTypeId(tab);
            setVehicles(vehicles);
            vehiclesRef.current = vehicles;
        };
        fetchVehicleByTypeId();
    }, [tab]);

    const getClassOfVehicle = (id) => {
        switch (id) {
            case 1:
                return 'car';
            case 2:
                return 'bus';
            case 3:
                return 'truck';
            default:
                return;
        }
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        const TIME = 500;
        setSearchValue(value);
        if (debounceTimeoutRef?.current) clearTimeout(debounceTimeoutRef.current);
        debounceTimeoutRef.current = setTimeout(() => {
            const updatedVehicles = vehiclesRef.current.filter((i) => i.vehicleId.includes(value));
            setVehicles(updatedVehicles);
        }, TIME);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tab-title')}>
                <Button
                    onClick={() => setTab(1)}
                    leftIcon={<FontAwesomeIcon icon={faCar} />}
                    className={tab === 1 ? cx('tab-button', 'car', 'active') : cx('tab-button', 'car')}
                >
                    Car
                </Button>
                <Button
                    onClick={() => setTab(2)}
                    leftIcon={<FontAwesomeIcon icon={faBus} />}
                    className={tab === 2 ? cx('tab-button', 'bus', 'active') : cx('tab-button', 'bus')}
                >
                    Bus
                </Button>
                <Button
                    onClick={() => setTab(3)}
                    leftIcon={<FontAwesomeIcon icon={faTruck} />}
                    className={tab === 3 ? cx('tab-button', 'truck', 'active') : cx('tab-button', 'truck')}
                >
                    Truck
                </Button>
            </div>
            <div className={cx('tab-content')}>
                <div className={cx('search-wrapper')}>
                    <div action="" className={cx('search-form', getClassOfVehicle(tab))}>
                        <input type="text" placeholder="Enter Vehicle's Id" className={cx('search-input')} onChange={handleSearch} value={searchValue} />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className={cx('table-wrapper')}>
                    <table id={cx('vehicle-table')}>
                        <thead className={cx(getClassOfVehicle(tab))}>
                            <tr>
                                <th>Id</th>
                                <th>Vehicle's Owner</th>
                                <th>Vehicle's Name</th>
                                <th>Vehicle's Brand</th>
                                <th>Is Parking</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehicles && vehicles.length > 0 ? (
                                vehicles.map((vehicle) => (
                                    <tr key={vehicle.vehicleId}>
                                        <td>{vehicle.vehicleId}</td>
                                        <td>{vehicle.owner}</td>
                                        <td>{vehicle.vehicleName}</td>
                                        <td>{vehicle.vehicleBrand}</td>
                                        <td>
                                            {vehicle.isParking === 0 ? (
                                                <FontAwesomeIcon style={{ color: 'red' }} icon={faX} />
                                            ) : (
                                                <FontAwesomeIcon style={{ color: 'green' }} icon={faCheck} />
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr style={{ backgroundColor: 'transparent' }}>
                                    <td colSpan="5">
                                        <h1
                                            style={{
                                                textAlign: 'center',
                                                color: '#000',
                                                fontWeight: 600,
                                                fontSize: '3rem',
                                            }}
                                        >
                                            Don't have any vehicle
                                        </h1>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Vehicles;
