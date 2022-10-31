import { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Vehicles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBus, faTruck, faTrash } from '@fortawesome/free-solid-svg-icons';

import { toast } from 'react-toastify';

import Button from '~/components/Button';
import ConfirmModal from '~/components/Modal/ConfirmModal';

import { getAllVehicle, enrollVehicle, getVehicleByUserId, deleteVehicle } from '~/services/vehicleService';
import { AuthContext } from '~/context/AuthContextProvider';

import Pagination from '~/components/Pagination';

const cx = classNames.bind(styles);

function Vehicles() {
    let pageSize = 32;
    const location = useLocation();
    const isEnroll = location.state?.isEnroll;
    const [vehicleList, setVehicleList] = useState([]);

    //Modal
    const vehicleRef = useRef();

    const [modalType, setModalType] = useState(null);

    const openModal = (e, type, vehicleId) => {
        e.preventDefault();
        vehicleRef.current = vehicleId;
        setModalType(type);
    };

    const closeModal = () => {
        setModalType(null);
    };
    //UI Tabs

    const [toggleState, setToggleState] = useState(isEnroll ? 2 : 1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    //Get All Vehicles
    useEffect(() => {
        const fetchAllVehicle = async () => {
            const vehicleList = await getAllVehicle();
            setVehicleList(vehicleList);
        };

        fetchAllVehicle()
    }, [])

    //Get user Id
    const [authState] = useContext(AuthContext);
    const [vehicles, setVehicles] = useState([]);


    //Get form input
    const [vehicleId, setVehicleId] = useState('');
    const [vehicleName, setVehicleName] = useState('');
    const [vehicleBrand, setVehicleBrand] = useState('');
    const [vehicleTypeId, setVehicleTypeId] = useState(0);

    //Enroll Vehicles

    const handleClickEnrollBtn = (e, vehicleId) => {
        e.preventDefault();
        const vehicleEnroll = vehicles.find((vehicle) => vehicle.id === vehicleId)
        const otherVehicleExisted = vehicleList.find((vehicle) => vehicle.id === vehicleId && vehicle.userId !== authState.user.id)
        const vehicleIdRegex = /^\(?([0-9]{2})[A-Z]\)?[-]?([0-9]{4}||[0-9]{5})$/
        if (vehicleId !== '' && vehicleName !== '' && vehicleBrand !== '' && vehicleTypeId !== null) {
            if (vehicleEnroll) {
                toast.error(`You have already enrolled '${vehicleId}'!`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
                setVehicleId('');
                setVehicleName('');
                setVehicleBrand('');
                setVehicleTypeId(0);
            } else if (otherVehicleExisted) {
                toast.error(`Vehicle '${vehicleId}' was enrolled by another person!`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
                setVehicleId('');
                setVehicleName('');
                setVehicleBrand('');
                setVehicleTypeId(0);
            } else if (!vehicleIdRegex.test(vehicleId)) {
                toast.error(`'${vehicleId}' is not right format! Please follow xxA-xxxx or xxB-xxxxx`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
                setVehicleId('');
                setVehicleName('');
                setVehicleBrand('');
                setVehicleTypeId(0);
            } else {
                openModal(e, 'enroll', vehicleId)
            }
        } else {
            if (vehicleId === '' && vehicleName === '' && vehicleBrand === '' && vehicleTypeId === null) {
                toast.error('All field must not be empty!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                if (vehicleId === '') {
                    toast.error(`Vehicle's Id must not be empty!`, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                }
                if (vehicleName === '') {
                    toast.error(`Vehicle's name must not be empty!`, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                }
                if (vehicleBrand === '') {
                    toast.error(`Vehicle's brand must not be empty!`, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                }
                if (vehicleTypeId === null) {
                    toast.error(`Please select type of vehicle`, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }
        }
    }
    const handleEnrollVehicle = async (e) => {
        e.preventDefault();
        try {
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
            toast.success(`Enroll vehicle '${vehicleId}' successfully!`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setVehicleId('');
            setVehicleName('');
            setVehicleBrand('');
            setVehicleTypeId(0);
        } catch (error) {
            return error;
        }

    };

    //Get Vehicles By User Id
    useEffect(() => {
        if (!authState.user.id) return;
        const getVehicle = async () => {
            const vehicles = await getVehicleByUserId(authState.user.id);
            setVehicles(vehicles);
        };
        try {
            getVehicle();
        } catch (error) {
            console.log('ERROR');
        }
    }, [authState.user.id]);

    //Delete Vehicle
    const handleClickDeleteBtn = (e, vehicleId) => {
        e.preventDefault();
        const vehicleIdDelete = vehicles.find((vehicle) => vehicle.id === vehicleId && vehicle.isParking === false)?.id;
        const vehicleIdParking = vehicles.find((vehicle) => vehicle.id === vehicleId && vehicle.isParking === true)?.id;
        switch (vehicleId) {
            case vehicleIdDelete: {
                openModal(e, 'delete', vehicleIdDelete);
                break;
            }
            case vehicleIdParking: {
                toast.error(`Vehicle '${vehicleIdParking}' is parking. Please check out before delete!`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
                break;
            }
            default:
                return;
        }
    }
    const handleDeleteVehicle = async (e) => {
        e.preventDefault();
        try {

            const response = await deleteVehicle(vehicleRef.current);
            console.log(response);
            closeModal();
            setVehicles(await getVehicleByUserId(authState.user.id));
            toast.success(`Delete vehicle '${vehicleRef.current}' successfully!`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

        } catch (error) {
            console.log(error);
        }
    };


    //Pagtination
    const [currentPage, setCurrentPage] = useState(1);

    const currentVehiclesPagination = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return vehicles.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, pageSize, vehicles]);

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

    const renderConfirmModal = (type) => {
        switch (type) {
            case 'enroll':
                return (
                    <ConfirmModal
                        onClose={closeModal}
                        content={`enroll vehicle '${vehicleRef.current}'`}
                        onConfirm={(e) => handleEnrollVehicle(e)}
                    />
                );
            case 'delete':
                return (
                    <ConfirmModal
                        onClose={closeModal}
                        content={`delete vehicle '${vehicleRef.current}'`}
                        onConfirm={handleDeleteVehicle}
                    />
                );
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
                    {/* Have Vehicles */}
                    {vehicles && vehicles.length > 0 ? (
                        <div className={cx('vehicle')}>
                            <ul className={cx('vehicle-list')}>
                                {currentVehiclesPagination.map((vehicle) => (
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
                                            <FontAwesomeIcon
                                                className={cx('delete-btn')}
                                                icon={faTrash}
                                                onClick={(e) => handleClickDeleteBtn(e, vehicle.id)}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <Pagination
                                className={cx('pagination-bar')}
                                currentPage={currentPage}
                                totalCount={vehicles.length}
                                pageSize={pageSize}
                                onPageChange={(page) => setCurrentPage(page)}
                            />
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
                                defaultValue="0"
                            >
                                <option value="0" disabled hidden>
                                    -- Select type of vehicle --
                                </option>
                                <option value="1">Car</option>
                                <option value="2">Bus</option>
                                <option value="3">Truck</option>
                            </select>
                        </div>
                        <Button className={cx('action-btn')} primary onClick={(e) => handleClickEnrollBtn(e, vehicleId)}>
                            Enroll a vehicle
                        </Button>
                    </form>
                </div>
                {/* Modal */}
                {renderConfirmModal(modalType)}
            </div>
        </div>
    );
}

export default Vehicles;
