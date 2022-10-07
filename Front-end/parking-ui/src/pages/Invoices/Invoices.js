import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Invoices.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '~/context/AuthContextProvider';
import { getInvoiceByUserIdApi } from '~/services/invoiceService';

const cx = classNames.bind(styles);

function Invoices() {
    const [authState] = useContext(AuthContext);
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        if (!authState.user.id) return;
        const getInvoiceByUserId = async () => {
            const invoices = await getInvoiceByUserIdApi(authState.user.id);
            setInvoices(invoices);
        };
        try {
            getInvoiceByUserId();
        } catch (error) {
            console.log('ERROR');
        }
    }, [authState.user.id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-bar')}>
                <input type="text" className={cx('search-input')} />
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
            </div>
            <ul className={cx('invoices-list')}>
                {invoices &&
                    invoices.length > 0 &&
                    invoices.map((invoice) => (
                        <li className={cx('invoice-item')} key={invoice.id}>
                            <div className={cx('vehicle-image')}>
                                <FontAwesomeIcon icon={faCar} className={cx('vehicle-icon')} />
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('info-group')}>
                                    <label htmlFor="" className={cx('info-label')}>
                                        Vehicle ID
                                    </label>
                                    <span className={cx('info-content')}>{invoice.vehicleId}</span>
                                </div>
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('info-group')}>
                                    <label htmlFor="" className={cx('info-label')}>
                                        Slot
                                    </label>
                                    <span className={cx('info-content')}>{invoice.slotId}</span>
                                </div>
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('info-group')}>
                                    <label htmlFor="" className={cx('info-label')}>
                                        Checked in
                                    </label>
                                    <span className={cx('info-content')}>{invoice.checkinTime}</span>
                                </div>
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('info-group')}>
                                    <label htmlFor="" className={cx('info-label')}>
                                        Checked out
                                    </label>
                                    <span className={cx('info-content')}>{invoice.checkoutTime}</span>
                                </div>
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('info-group')}>
                                    <label htmlFor="" className={cx('info-label')}>
                                        Total Time
                                    </label>
                                    <span className={cx('info-content')}>12:34:34</span>
                                </div>
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('info-group')}>
                                    <label htmlFor="" className={cx('info-label')}>
                                        Total Price
                                    </label>
                                    <span className={cx('info-content')}>{invoice.totalPaid}</span>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Invoices;
