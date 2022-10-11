import PropTypes from 'prop-types';
import styles from './AdminLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import AuthContextProvider from '~/context/AuthContextProvider';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <AuthContextProvider>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <div className={cx('content')}>{children}</div>
                </div>
                <Footer />
            </div>
        </AuthContextProvider>
    );
}

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminLayout;
