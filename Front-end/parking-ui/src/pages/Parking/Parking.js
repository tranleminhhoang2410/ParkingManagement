import classNames from 'classnames/bind';
import styles from './Parking.module.scss';

import ParkingArea from '~/components/ParkingArea';
import { useEffect, useState } from 'react';
import { getAllSlotsApi } from '~/services/slotService';

const cx = classNames.bind(styles);

function Parking () {
    const [lotRows, setLotRows] = useState([]);

    useEffect(() => {
        const fetchSlotsData = async () => {
            const lotRows = await getAllSlotsApi();
            setLotRows(lotRows);
        };
        fetchSlotsData();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('parking-area')}>
                <div className={cx('truck-area')}>
                    <ParkingArea lotRows={lotRows} area="E" type="TRUCK" className={cx('parking-area-item')} />
                </div>
                <div className={cx('bus-area')}>
                    <ParkingArea lotRows={lotRows} area="D" type="BUS" className={cx('parking-area-item')} />
                </div>
                <div className={cx('car-area')}>
                    <ParkingArea lotRows={lotRows} area="C" type="CAR" className={cx('parking-area-item')} />
                    <ParkingArea lotRows={lotRows} area="B" type="CAR" className={cx('parking-area-item')} />
                    <ParkingArea lotRows={lotRows} area="A" type="CAR" className={cx('parking-area-item')} />
                </div>
                <div className={cx('plant-area')}>
                    <h1 className={cx('plant-text')}>plant</h1>
                </div>
            </div>
        </div>
    );
}

export default Parking;
