import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-wrapper')}>
                <img src={require('~/assets/images/logo.png')} alt="logo" />
            </div>
            <ul className={cx('rule-list')}>
                <li className={cx('rule-item')}>
                    The parking lot has 5 areas: A, B, C, D, E. While area A, B, C for Car, area D for Bus and Area E
                    for Truck
                </li>
                <li className={cx('rule-item')}>
                    Each area has many rows, each row was marked by a number that user can enroll to have a slot.
                </li>
                <li className={cx('rule-item')}>
                    Before taking a row, user must enroll his/her vehicles with the system
                </li>
                <li className={cx('rule-item')}>
                    A user can enroll one or more vehicles. The system will record the time that user checked in.
                </li>
                <li className={cx('rule-item')}>
                    When user leave the parking lot, admin will do check out action and record into an invoice including
                    parking information.
                </li>
                <li className={cx('rule-item')}>Price table for each type of vehicles was listed in the Price Page.</li>
                <li className={cx('rule-item')}>User will pay for their parking to admin when leave out.</li>
            </ul>
            <div className={cx('signature-wrapper')}>
                <h3 className={cx('signature-title')}>Administrator</h3>
            </div>
        </div>
    );
}

export default About;
