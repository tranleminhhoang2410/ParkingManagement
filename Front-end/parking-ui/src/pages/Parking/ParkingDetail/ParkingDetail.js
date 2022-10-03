import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ParkingDetail.module.scss';

import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faX } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getSlotById } from '~/services/slotService';
import { AuthContext } from '~/context/AuthContextProvider';
import { checkIn, checkOut, getCheckedInVehicle, getVehicleByUserId } from '~/services/vehicleService';

const cx = classNames.bind(styles);

function ParkingDetail() {
    const parkingId = useParams().id;
    const [parkingSlot, setParkingSlot] = useState([]);
    const [vehicleByUserId, setVehicleByUserId] = useState([]);
    const [vehicleCheckedIn, setVehicleCheckedIn] = useState({});
    const [authState] = useContext(AuthContext);
    const [vehiclePlate, setVehiclePlate] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    console.log(authState)

    const status = location?.state.status
    console.log(status);

    //Get Slot Detail
    useEffect(() => {
        const fetchSlotDetail = async () => {
            setParkingSlot(await getSlotById(parkingId));
        };
        fetchSlotDetail();
    }, [parkingId]);

    //Get Vehicle By User Id
    useEffect(() => {
        const fetchVehicleByUserId = async () => {
            const vehicle = await getVehicleByUserId(authState.user.id)

            console.log(vehicle);
            setVehicleByUserId(vehicle);
        };

        if (authState.user.id) fetchVehicleByUserId();
    }, [authState.user.id]);

    //Get checked in vehicle
    useEffect(() => {
        const fetchCheckedInVehicle = async () => {
            setVehicleCheckedIn(await getCheckedInVehicle(parkingId));
        }
        fetchCheckedInVehicle();
    }, [parkingId])

    //Filter vehicle by Vehicle Type Id of Slot
    const vehiclesBySlot = vehicleByUserId.filter((vehicle) => !vehicle.isParking && (vehicle.vehicleTypeId === parkingSlot.vehicleTypeId));

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
        toast.success(`Checked in ${slotId} successfully!`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    };

    //Check out
    const handleCheckOut = async (event) => {
        event.preventDefault();
        const response = await checkOut({
            id: vehicleCheckedIn.id,
            checkinTime: vehicleCheckedIn.checkinTime,
            checkoutTime: vehicleCheckedIn.checkoutTime,
            vehicleId: vehicleCheckedIn.vehicleId,
            slotId: parkingId
        })
        console.log(response);
        navigate('/parking');
        toast.success(`Checked out ${parkingId} successfully!`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }

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

    const handleRenderVehicleId = () => {
        if (status === 'isEmpty') {
            if (vehiclesBySlot && vehiclesBySlot.length > 0) {
                return (
                    <select
                        className={cx('input-text')}
                        defaultValue={'DEFAULT'}
                        onChange={(e) => setVehiclePlate(e.target.value)}
                    >
                        <option value="DEFAULT" disabled hidden>
                            -- Select a vehicle --
                        </option>
                        {vehiclesBySlot.map((vehicle) => (
                            <option key={vehicle.id} value={vehicle.id}>
                                {vehicle.id}
                            </option>
                        ))}
                    </select>
                )
            } else {
                return (
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
                )
            }
        } else {
            //Get Vehicle Id when check in
            return (
                <span className={cx('input-notext')}>{vehicleCheckedIn.vehicleId}</span>
            )
        }
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
                            {handleRenderVehicleId()}
                        </div>
                        {
                            status === 'isMyParkedSlot' && <div className={cx('input-group')}>
                                <label htmlFor="vehicleType" className={cx('input-label')}>
                                    Checked in Time
                                </label>
                                <span className={cx('input-notext')}>{vehicleCheckedIn.checkinTime}</span>
                            </div>
                        }
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
                {status === 'isEmpty' ? (<Button className={cx('regis-btn')} primary>
                    CHECK IN
                </Button>) : (<Button className={cx('checkout-btn')} primary>
                    CHECK OUT
                </Button>)}
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
                        onSubmit={status === 'isEmpty' ? handleCheckIn : handleCheckOut}
                    >
                        <h1 style={{ fontSize: '3rem', fontWeight: '500', color: 'var(--primary-color)' }}>
                            Do you want to {status === 'isEmpty' ? 'check in' : 'check out'} this slot ?
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
