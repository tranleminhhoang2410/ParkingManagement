import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ParkingDetail.module.scss';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

import { getSlotById } from '~/services/slotService';
import { AuthContext } from '~/context/AuthContextProvider';
import { getVehicleByUserId } from '~/services/vehicleService';

const cx = classNames.bind(styles);

function ParkingDetail() {
    // const { id } = useParams;
    const parkingId = useParams().id;
    const [parkingSlot, setParkingSlot] = useState([]);
    const [vehicleId, setVehicleId] = useState([]);
    const [authState] = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSlotDetail = async () => {
            setParkingSlot(await getSlotById(parkingId));
        };

        const fetchVehicleByUserId = async () => {
            setVehicleId(await getVehicleByUserId(authState.user.id));
        };

        fetchSlotDetail();
        fetchVehicleByUserId();
    }, [parkingId]);

    //Filter vehicle by Vehicle Type Id of Slot
    const vehiclesBySlot = vehicleId.filter((vehicle) => vehicle.vehicleTypeId === parkingSlot.vehicleTypeId);

    //Get Current Date
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    //Move to enroll vehicle form
    const moveToEnrollVehicleForm = () => {
        navigate('/vehicles');
    };

    return (
        <div className={cx('wrapper')}>
            <Button leftIcon={<FontAwesomeIcon icon={faArrowLeft} />} className={cx('back-btn')} to="/parking">
                Back
            </Button>
            <form action="" id="enroll-form" className={cx('enroll-form')}>
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
                                <select type="text" className={cx('input-text')}>
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
        </div>
    );
}

export default ParkingDetail;
