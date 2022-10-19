import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Slots.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBus, faTruck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import ConfirmModal from '~/components/Modal/ConfirmModal';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getSlotByVehicleTypeId, updateSlotStatus } from '~/services/slotService';
import { checkOut, getCheckedInVehicle } from '~/services/vehicleService';

const cx = classNames.bind(styles);

function Slots() {
    const [tab, setTab] = useState(1);
    const [slots, setSlots] = useState([]);
    const [vehicleCheckedIn, setVehicleCheckedIn] = useState({});

    //Modal
    const slotRef = useRef();

    const [modalType, setModalType] = useState(null);

    const openModal = (e, type, slotId) => {
        e.preventDefault();
        slotRef.current = slotId;
        setModalType(type);
    };

    const closeModal = () => {
        setModalType(null);
    };

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

    //Get Slot By Vehicle Type
    useEffect(() => {
        const getAllSlotsByVehicleType = async () => {
            const slots = await getSlotByVehicleTypeId(tab);
            setSlots(slots);
        };
        getAllSlotsByVehicleType();
    }, [tab]);

    //Get checked in vehicle
    useEffect(() => {
        const fetchCheckedInVehicle = async () => {
            setVehicleCheckedIn(await getCheckedInVehicle(slotRef.current));
        };
        fetchCheckedInVehicle();
    }, []);

    const renderStatus = (status) => {
        switch (status) {
            case 0:
                return 'Empty';
            case 1:
                return 'Parking';
            case -1:
                return 'Maintaining';
            default:
                return;
        }
    };

    const renderAction = (status, slotId) => {
        switch (status) {
            case 0:
                return (
                    <Button onClick={(e) => openModal(e, 'maintenance', slotId)} className={cx('maintenance-btn')}>
                        Maintenance
                    </Button>
                );
            case 1:
                return (
                    <Button onClick={(e) => openModal(e, 'checkout', slotId)} className={cx('checkout-btn')}>
                        Check out
                    </Button>
                );
            case -1:
                return (
                    <Button onClick={(e) => openModal(e, 'fixed', slotId)} className={cx('fixed-btn')}>
                        Fixed
                    </Button>
                );
            default:
                return;
        }
    };

    const renderConfirmModal = (type) => {
        switch (type) {
            case 'maintenance':
                return (
                    <ConfirmModal
                        onClose={closeModal}
                        content={`Maintain slot ${slotRef.current}`}
                        onConfirm={handleMaintenanceSlot}
                    />
                );
            case 'checkout':
                return (
                    <ConfirmModal
                        onClose={closeModal}
                        content={`Check out slot ${slotRef.current}`}
                        onConfirm={(e) => handleCheckoutSlot(e, vehicleCheckedIn)}
                    />
                );
            case 'fixed':
                return (
                    <ConfirmModal
                        onClose={closeModal}
                        content={`Fix slot ${slotRef.current}`}
                        onConfirm={handleFixSlot}
                    />
                );
            default:
                return;
        }
    };

    //Handle Action
    const handleMaintenanceSlot = async (e) => {
        e.preventDefault();
        try {
            await updateSlotStatus({
                slotId: slotRef.current,
                status: -1,
            });
            closeModal();
            toast.success(`Slot ${slotRef.current} is maintaining!`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setSlots(await getSlotByVehicleTypeId(tab));
        } catch (error) {
            console.log(error);
        }
    };

    const handleFixSlot = async (e) => {
        e.preventDefault();
        try {
            await updateSlotStatus({
                slotId: slotRef.current,
                status: 0,
            });
            toast.success(`Slot ${slotRef.current} was fixed!`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            closeModal();
            setSlots(await getSlotByVehicleTypeId(tab));
        } catch (error) {
            console.log(error);
        }
    };

    const handleCheckoutSlot = async (e, vehicleCheckedIn) => {
        e.preventDefault();
        try {
            await checkOut({
                id: vehicleCheckedIn.id,
                checkinTime: vehicleCheckedIn.checkinTime,
                checkoutTime: vehicleCheckedIn.checkoutTime,
                vehicleId: vehicleCheckedIn.vehicleId,
                slotId: slotRef.current,
            });
            toast.success(`Check out slot ${slotRef.current} successfully!`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            closeModal();
            setSlots(await getSlotByVehicleTypeId(tab));
        } catch (error) {
            console.log(error);
        }
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
                    <form action="" className={cx('search-form', getClassOfVehicle(tab))}>
                        <input type="text" placeholder="Enter Vehicle Id" className={cx('search-input')} />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </form>
                </div>
                <div className={cx('table-wrapper')}>
                    <table className={cx('invoice-table')}>
                        <thead className={cx(getClassOfVehicle(tab))}>
                            <tr>
                                <th>Slot Id</th>
                                <th>Vehicle Id</th>
                                <th>Status</th>
                                <th>Check in Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {slots.map((slot) => (
                                <tr key={slot}>
                                    <td className={cx('slot-txt')}>
                                        {slot.area}
                                        {slot.position}
                                    </td>
                                    <td className={cx(`${slot.vehicleTypeName.toLowerCase()}-txt`)}>
                                        {slot.status === 1 && slot.vehicleID}
                                    </td>
                                    <td style={slot.status ? { color: 'var(--parked-color)' } : { color: '#333' }}>
                                        {renderStatus(slot.status)}
                                    </td>
                                    <td>{slot.status === 1 && slot.checkInTime}</td>
                                    <td>{renderAction(slot.status, slot.area + slot.position)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {renderConfirmModal(modalType)}
                </div>
            </div>
        </div>
    );
}

export default Slots;
