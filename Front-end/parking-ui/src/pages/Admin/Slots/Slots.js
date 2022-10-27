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
    const [searchValue, setSearchValue] = useState('');
    const slotsRef = useRef(null);
    const tableRef = useRef(null);
    const debounceTimeoutRef = useRef(null);


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
            slotsRef.current = slots;
        };
        getAllSlotsByVehicleType();
    }, [tab]);


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
                        onConfirm={handleCheckoutSlot}
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
            toast.success(`Slot '${slotRef.current}' is maintaining!`, {
                position: 'top-right',
                autoClose: 3000,
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
            toast.success(`Slot '${slotRef.current}' was fixed!`, {
                position: 'top-right',
                autoClose: 3000,
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

    const handleCheckoutSlot = async (e) => {
        e.preventDefault();
        try {
            const vehicle = await getCheckedInVehicle(slotRef.current)

            await checkOut({
                id: vehicle.id,
                checkinTime: vehicle.checkinTime,
                checkoutTime: vehicle.checkoutTime,
                vehicleId: vehicle.vehicleId,
                slotId: slotRef.current,
            });
            toast.success(`Checked out slot '${slotRef.current}' successfully!`, {
                position: 'top-right',
                autoClose: 3000,
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

    const handleSearch = (e) => {
        const value = e.target.value;
        const TIME = 500;
        setSearchValue(value);
        if (debounceTimeoutRef?.current) clearTimeout(debounceTimeoutRef.current);
        debounceTimeoutRef.current = setTimeout(() => {
            const updatedSlots = slotsRef.current.filter((i) => i.vehicleID.includes(value));
            setSlots(updatedSlots);
        }, TIME);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tab-title')}>
                <Button
                    onClick={() => { setTab(1); tableRef.current.scrollTo(0, 0) }}
                    leftIcon={<FontAwesomeIcon icon={faCar} />}
                    className={tab === 1 ? cx('tab-button', 'car', 'active') : cx('tab-button', 'car')}
                >
                    Car
                </Button>
                <Button
                    onClick={() => { setTab(2); tableRef.current.scrollTo(0, 0) }}
                    leftIcon={<FontAwesomeIcon icon={faBus} />}
                    className={tab === 2 ? cx('tab-button', 'bus', 'active') : cx('tab-button', 'bus')}
                >
                    Bus
                </Button>
                <Button
                    onClick={() => { setTab(3); tableRef.current.scrollTo(0, 0) }}
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
                <div className={cx('table-wrapper')} ref={tableRef}>
                    <table id={cx('slot-table')}>
                        <thead className={cx(getClassOfVehicle(tab))}>
                            <tr>
                                <th>Slot Id</th>
                                <th>Vehicle Id</th>
                                <th>Status</th>
                                <th>Checked in</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {slots && slots.map((slot) => {
                                const slotId = slot.area + slot.position;
                                return (
                                    <tr key={slotId}>
                                        <td className={cx('slot-txt')}>
                                            {slotId}
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
                                )
                            })}
                        </tbody>
                    </table>
                    {renderConfirmModal(modalType)}
                </div>
            </div>
        </div>
    );
}

export default Slots;
