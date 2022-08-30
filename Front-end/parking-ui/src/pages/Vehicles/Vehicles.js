import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Vehicles.module.scss';

import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBus, faTruck, faCheck, faX } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '~/components/Button';
import { enrollVehicle, getVehicleByUserId } from '~/services/vehicleService';
import { AuthContext } from '~/context/AuthContextProvider';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Vehicles() {
    const location = useLocation();
    const isEnroll = location.state?.isEnroll;
    const [modalIsOpen, setIsOpen] = useState(false);

    //Custom Style for Modal
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },

        content: {
            width: '40%',
            maxWidth: '100%',
            top: '40%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'none',
            border: 'none',
        },
    };

    //Confirm Modal
    function openModal(e) {
        e.preventDefault();
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    //UI Tabs

    const [toggleState, setToggleState] = useState(isEnroll ? 2 : 1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    //Get user Id
    const [authState] = useContext(AuthContext);
    const [vehicles, setVehicles] = useState([]);

    //Get form input
    const [vehicleId, setVehicleId] = useState('');
    const [vehicleName, setVehicleName] = useState('');
    const [vehicleBrand, setVehicleBrand] = useState('');
    const [vehicleTypeId, setVehicleTypeId] = useState(1);

    //Enroll Vehicles
    const handleEnrollVehicle = async (event) => {
        event.preventDefault();

        await enrollVehicle({
            userID: authState.user.id,
            vehicleId: vehicleId,
            name: vehicleName,
            brand: vehicleBrand,
            typeId: vehicleTypeId,
        });
        const vehicles = await getVehicleByUserId(authState.user.id);
        setVehicles(vehicles);
        closeModal();
        setToggleState(1);
        notifyEnrollSuccess();
    };

    useEffect(() => {
        const getVehicle = async () => {
            const vehicles = await getVehicleByUserId(authState.user.id);
            setVehicles(vehicles);
        };
        getVehicle();
    }, [authState.user.id]);

    const getIconOfVehicle = (id) => {
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

    const notifyEnrollSuccess = () => {
        toast.success('Enroll a vehicle successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
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
                    {/* Have Vehicles */}
                    {vehicles && vehicles.length > 0 ? (
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
                            </ul>
                        </div>
                    ) : (
                        /* Don't have vehicle */
                        <div className={cx('no-vehicle')}>
                            <h1 className={cx('no-vehicle-notification')}>You don't have any vehicle yet</h1>
                        </div>
                    )}
                </div>
                {/* ENROLL VEHICLE Form */}
                <div className={toggleState === 2 ? cx('content', 'active-content') : cx('content')}>
                    <form id="vehicle-enroll-form" className={cx('vehicle-enroll-form')}>
                        <div className={cx('input-group')}>
                            <label htmlFor="registrationPlate" className={cx('input-label')}>
                                Vehicle's Registration Plate
                            </label>
                            <input
                                type="text"
                                className={cx('input-text')}
                                id="registrationPlate"
                                value={vehicleId}
                                onChange={(event) => setVehicleId(event.target.value)}
                            />
                        </div>
                        <div className={cx('input-group')}>
                            <label htmlFor="name" className={cx('input-label')}>
                                Vehicle's Name
                            </label>
                            <input
                                type="text"
                                className={cx('input-text')}
                                id="name"
                                value={vehicleName}
                                onChange={(event) => setVehicleName(event.target.value)}
                            />
                        </div>
                        <div className={cx('input-group')}>
                            <label htmlFor="brand" className={cx('input-label')}>
                                Vehicle's Brand
                            </label>
                            <input
                                type="text"
                                className={cx('input-text')}
                                id="brand"
                                value={vehicleBrand}
                                onChange={(event) => setVehicleBrand(event.target.value)}
                            />
                        </div>
                        <div className={cx('input-group')}>
                            <label htmlFor="type" className={cx('input-label')}>
                                Vehicle's Type
                            </label>
                            <select
                                name=""
                                id=""
                                className={cx('input-text')}
                                onChange={(e) => setVehicleTypeId(e.target.value)}
                                defaultValue={'DEFAULT'}
                            >
                                <option value="DEFAULT" selected disabled hidden>
                                    -- Select type of vehicle --
                                </option>
                                <option value="1">Car</option>
                                <option value="2">Bus</option>
                                <option value="3">Truck</option>
                            </select>
                        </div>
                        <Button className={cx('action-btn')} primary onClick={openModal}>
                            Enroll a vehicle
                        </Button>
                    </form>
                </div>
                {/* Modal */}
                <div className={cx('modal')}>
                    <Modal ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                        {/* Confirm Form */}
                        <div>
                            <form
                                style={{
                                    padding: '16px',
                                    borderRadius: '8px',
                                    border: '2px solid var(--primary-border-color)',
                                    backgroundColor: '#ffffe0',
                                }}
                                id="confirm-form"
                                className={cx('confirm-form')}
                                onSubmit={handleEnrollVehicle}
                            >
                                <h1 style={{ fontSize: '3rem', fontWeight: '500', color: 'var(--primary-color)' }}>
                                    Do you want to enroll this vehicle ?
                                </h1>
                                <div
                                    style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}
                                    className="action-btn"
                                >
                                    <Button
                                        style={{ flex: '50%', textTransform: 'uppercase', backgroundColor: 'green' }}
                                        className={cx('confirm-btn')}
                                        primary
                                        leftIcon={<FontAwesomeIcon icon={faCheck} />}
                                        type="submit"
                                    >
                                        confirm
                                    </Button>
                                    <Button
                                        style={{ flex: '50%', textTransform: 'uppercase', backgroundColor: 'red' }}
                                        className={cx('cancel-btn')}
                                        primary
                                        leftIcon={<FontAwesomeIcon icon={faX} />}
                                        type="button"
                                        onClick={closeModal}
                                    >
                                        cancel
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Modal>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Vehicles;
