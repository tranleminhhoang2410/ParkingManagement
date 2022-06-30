import classNames from 'classnames/bind';
import styles from './Parking.module.scss';

import Row from '~/components/ParkingArea/Row/Row';

const cx = classNames.bind(styles);

function Parking () {
    return (
        <div className={cx('wrapper')}>
            <Row number="1" />
            <Row number="2" />
        </div>
    );
}

export default Parking;
