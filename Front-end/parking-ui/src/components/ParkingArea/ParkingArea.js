import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ParkingArea.module.scss';

const cx = classNames.bind(styles);

function ParkingArea ({ area, type, numberOfRows }) {
    return <div className={cx('wrapper')}></div>;
}

ParkingArea.propTypes = {
    area: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default ParkingArea;
