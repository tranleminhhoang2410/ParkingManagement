import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Invoices.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { getAllInvoices } from '~/services//invoiceService'

const cx = classNames.bind(styles);

function Invoices() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchAllInvoice = async () => {
            const invoices = await getAllInvoices();
            setInvoices(invoices);
        };
        fetchAllInvoice();
    }, [])

    return (
        <div className={cx('content')}>
            <div className={cx('search-wrapper')}>
                <form action="" className={cx('search-form')}>
                    <input type="text" placeholder="Enter Vehicle Id" className={cx('search-input')} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </form>
            </div>
            <div className={cx('table-wrapper')}>
                <table className={cx('invoice-table')}>
                    <thead className={cx('table-header')}>
                        <tr>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Vehicle's Id</th>
                            <th>Slot</th>
                            <th>Checked in</th>
                            <th>Checked out</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices && invoices.length > 0 &&
                            invoices.map(invoice =>
                                <tr key={invoice}>
                                    <td>{invoice.id}</td>
                                    <td>{invoice.userName}</td>
                                    <td>{invoice.vehicleId}</td>
                                    <td>{invoice.slotId}</td>
                                    <td>{invoice.checkinTime}</td>
                                    <td>{invoice.checkoutTime}</td>
                                    <td>{invoice.totalPaid.toLocaleString('it-IT')} VNĐ</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Invoices;