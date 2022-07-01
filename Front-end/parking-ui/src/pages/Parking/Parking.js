import classNames from 'classnames/bind';
import styles from './Parking.module.scss';

import ParkingArea from '~/components/ParkingArea';

const cx = classNames.bind(styles);

function Parking () {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('parking-area')}>
                <ParkingArea area="A" type="CAR" numberOfRows={19} className={cx('parking-area-item')} />
                <ParkingArea area="B" type="CAR" numberOfRows={19} className={cx('parking-area-item')} />
                <ParkingArea area="C" type="CAR" numberOfRows={19} className={cx('parking-area-item')} />
                <ParkingArea area="D" type="TRUCK" numberOfRows={19} className={cx('parking-area-item')} />
                <ParkingArea area="E" type="BUS" numberOfRows={19} className={cx('parking-area-item')} />
            </div>
        </div>
    );
}

export default Parking;
