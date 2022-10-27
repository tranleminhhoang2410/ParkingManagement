import { useState, useEffect, useContext, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './ParkingDetail.module.scss';

import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import ConfirmModal from '~/components/Modal/ConfirmModal'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getSlotById } from '~/services/slotService';
import { AuthContext } from '~/context/AuthContextProvider';

import { checkIn, getCheckedInVehicle, getVehicleByUserId } from '~/services/vehicleService';

const cx = classNames.bind(styles);

function ParkingDetail() {
    const parkingId = useParams().id;
    const [parkingSlot, setParkingSlot] = useState([]);
    const [vehicleByUserId, setVehicleByUserId] = useState([]);
    const [vehicleCheckedIn, setVehicleCheckedIn] = useState({});
    const [authState] = useContext(AuthContext);
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [modalType, setModalType] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const status = location?.state.status;

    const slotRef = useRef();

    const openModal = (e, type, slotId) => {
        e.preventDefault();
        slotRef.current = slotId;
        setModalType(type);
    };

    const closeModal = () => {
        setModalType(null);
    };

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
            const vehicle = await getVehicleByUserId(authState.user.id);
            setVehicleByUserId(vehicle);
        };

        if (authState.user.id) fetchVehicleByUserId();
    }, [authState.user.id]);

    //Get checked in vehicle
    useEffect(() => {
        const fetchCheckedInVehicle = async () => {
            setVehicleCheckedIn(await getCheckedInVehicle(parkingId));
        };
        fetchCheckedInVehicle();
    }, [parkingId]);

    //Filter vehicle by Vehicle Type Id of Slot
    const vehiclesBySlot = vehicleByUserId.filter(
        (vehicle) => !vehicle.isParking && vehicle.vehicleTypeId === parkingSlot.vehicleTypeId,
    );

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
        toast.success(`Checked in slot '${slotId}' successfully!`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    };

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
                );
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
                );
            }
        } else {
            //Get Vehicle Id when check in
            return <span className={cx('input-notext')}>{vehicleCheckedIn.vehicleId}</span>;
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Button leftIcon={<FontAwesomeIcon icon={faArrowLeft} />} className={cx('back-btn')} to="/parking">
                Back
            </Button>
            <form action="" id="enroll-form" className={cx('enroll-form')} onSubmit={(e) => openModal(e, 'checkin', parkingId)}>
                <div className={cx('form-info')}>
                    <div className={cx('parking-area')}>
                        <div className={cx('parking-lot')}></div>
                        <span className={cx('parking-id')}>{parkingId}</span>
                    </div>
                    <div className={cx('form-input')}>
                        <div className={cx('input-group')}>
                            <label htmlFor="vehiclePlate" className={cx('input-label')}>
                                Vehicle Id
                            </label>
                            {handleRenderVehicleId()}
                        </div>
                        {status === 'isMyParkedSlot' && (
                            <div className={cx('input-group')}>
                                <label htmlFor="vehicleType" className={cx('input-label')}>
                                    Checked in Time
                                </label>
                                <span className={cx('input-notext')}>{vehicleCheckedIn.checkinTime}</span>
                            </div>
                        )}
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
                {status === 'isEmpty' ? (
                    <Button className={cx('regis-btn')} primary>
                        CHECK IN
                    </Button>
                ) : (
                    <></>
                )}
            </form>
            {modalType === 'checkin' && <ConfirmModal
                onClose={closeModal}
                content={`check in slot '${slotRef.current}'`}
                onConfirm={handleCheckIn}
            />}
        </div>
    );
}

export default ParkingDetail;
