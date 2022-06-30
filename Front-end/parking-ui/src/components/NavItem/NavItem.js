import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function NavItem ({ icon, title, description }) {
    return (
        <div className={cx('nav-wrapper')}>
            <div className={cx('nav-icon-wrapper')}>
                <FontAwesomeIcon className={cx('nav-icon')} icon={icon} />
            </div>
            <h2 className={cx('nav-title')}>{title}</h2>
            <span className={cx('nav-description')}>{description}</span>
        </div>
    );
}

NavItem.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default NavItem;
