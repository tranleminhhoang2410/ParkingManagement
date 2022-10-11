import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (<div className={cx('wrapper')}>
        <div className={cx('content')}>
            <span className={cx('coppyright')}>2022 © Parking.</span>
            <span className={cx('coppyright')}>Design & Develop by ParkingTeam.</span>
        </div>
    </div>);
}

export default Footer;
