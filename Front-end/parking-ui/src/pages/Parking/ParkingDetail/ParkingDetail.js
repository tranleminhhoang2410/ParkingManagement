import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ParkingDetail.module.scss';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faX } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getSlotById } from '~/services/slotService';
import { AuthContext } from '~/context/AuthContextProvider';
import { checkIn, getVehicleByUserId } from '~/services/vehicleService';

const cx = classNames.bind(styles);

function ParkingDetail() {
    const parkingId = useParams().id;
    const [parkingSlot, setParkingSlot] = useState([]);
    const [vehicleByUserId, setVehicleByUserId] = useState([]);
    const [authState] = useContext(AuthContext);
    const [vehiclePlate, setVehiclePlate] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSlotDetail = async () => {
            setParkingSlot(await getSlotById(parkingId));
        };

        const fetchVehicleByUserId = async () => {
            setVehicleByUserId(await getVehicleByUserId(authState.user.id));
        };

        fetchSlotDetail();
        fetchVehicleByUserId();
    }, [authState.user.id, parkingId]);

    //Filter vehicle by Vehicle Type Id of Slot
    const vehiclesBySlot = vehicleByUserId.filter((vehicle) => vehicle.vehicleTypeId === parkingSlot.vehicleTypeId);

    //Get Current Date
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    //Move to enroll vehicle form
    const moveToEnrollVehicleForm = () => {
        navigate('/vehicles', { state: { isEnroll: true } });
    };

    //Check in
    const handleCheckIn = async (event) => {
        event.preventDefault();
        const vehicleId = vehiclePlate;
        const slotId = parkingId;

        await checkIn({
            vehicleId: vehicleId,
            slotId: slotId,
        });
        navigate('/parking');
        notifyCheckInSuccess();
    };

    const notifyCheckInSuccess = () => {
        toast.success('Check in successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

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

    return (
        <div className={cx('wrapper')}>
            <Button leftIcon={<FontAwesomeIcon icon={faArrowLeft} />} className={cx('back-btn')} to="/parking">
                Back
            </Button>
            <form action="" id="enroll-form" className={cx('enroll-form')} onSubmit={openModal}>
                <div className={cx('form-info')}>
                    <div className={cx('parking-area')}>
                        <div className={cx('parking-lot')}></div>
                        <span className={cx('parking-id')}>{parkingId}</span>
                    </div>
                    <div className={cx('form-input')}>
                        <div className={cx('input-group')}>
                            <label htmlFor="vehiclePlate" className={cx('input-label')}>
                                Vehicle Registration Plate
                            </label>
                            {vehiclesBySlot && vehiclesBySlot.length > 0 ? (
                                <select
                                    className={cx('input-text')}
                                    defaultValue={'DEFAULT'}
                                    onChange={(e) => setVehiclePlate(e.target.value)}
                                >
                                    <option value="DEFAULT" selected disabled hidden>
                                        -- Select a vehicle --
                                    </option>
                                    {vehiclesBySlot.map((vehicle) => (
                                        <option key={vehicle.id} value={vehicle.id}>
                                            {vehicle.id}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <>
                                    <h1 style={{ fontSize: '2rem', color: 'red', marginRight: '4px' }}>
                                        You don't have any {parkingSlot.vehicleTypeName} yet !
                                    </h1>
                                    <Button
                                        style={{
                                            padding: '0',
                                            backgroundColor: 'transparent',
                                            marginLeft: '16px',
                                            textDecoration: 'underline',
                                            color: '#00008B',
                                        }}
                                        onClick={moveToEnrollVehicleForm}
                                    >
                                        Enroll here
                                    </Button>
                                </>
                            )}
                        </div>
                        <div className={cx('input-group')}>
                            <label htmlFor="vehicleType" className={cx('input-label')}>
                                Vehicle Type
                            </label>
                            <span className={cx('input-notext')}>{parkingSlot.vehicleTypeName}</span>
                        </div>
                        <div className={cx('input-group')}>
                            <label htmlFor="registrationDate" className={cx('input-label')}>
                                Registration Date
                            </label>
                            <span className={cx('input-notext')}>{date}</span>
                        </div>
                    </div>
                </div>
                <Button className={cx('regis-btn')} primary>
                    CHECK IN
                </Button>
            </form>
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
                        onSubmit={handleCheckIn}
                    >
                        <h1 style={{ fontSize: '3rem', fontWeight: '500', color: 'var(--primary-color)' }}>
                            Do you want to check in this slot ?
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
    );
}

export default ParkingDetail;
