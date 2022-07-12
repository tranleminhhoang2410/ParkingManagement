import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ParkingDetail.module.scss';
import { useParams } from 'react-router-dom';

import Button from '~/components/Button';

import { getSlotById } from '~/services/slotService';

const cx = classNames.bind(styles);

function ParkingDetail () {
    // const { id } = useParams;
    const parkingId = useParams().id;
    const [parkingSlot, setParkingSlot] = useState([]);

    useEffect(() => {
        const fetchSlotDetail = async () => {
            setParkingSlot(await getSlotById(parkingId));
        };

        fetchSlotDetail();
    }, [parkingId]);

    //Get Current Date
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    return (
        <div className={cx('wrapper')}>
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
                            <input type="text" className={cx('input-text')} />
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
