import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <span className={cx('coppyright')}>2022 © ParkingSpot.</span>
                <span className={cx('coppyright')}>Design & Develop by ParkingSpotTeam.</span>
            </div>
        </div>
    );
}

export default Footer;
