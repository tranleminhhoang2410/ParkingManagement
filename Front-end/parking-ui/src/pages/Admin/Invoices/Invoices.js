import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Invoices.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { getAllInvoices } from '~/services//invoiceService'

const cx = classNames.bind(styles);

function Invoices() {
    const [invoices, setInvoices] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const invoicesRef = useRef(null);
    const debounceTimeoutRef = useRef(null);

    useEffect(() => {
        const fetchAllInvoice = async () => {
            const invoices = await getAllInvoices();
            setInvoices(invoices);
            invoicesRef.current = invoices;
        };
        fetchAllInvoice();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;
        const TIME = 500;
        setSearchValue(value);
        if (debounceTimeoutRef?.current) clearTimeout(debounceTimeoutRef.current);
        debounceTimeoutRef.current = setTimeout(() => {
            const updatedInvoices = invoicesRef.current.filter((i) => i.vehicleId.includes(value));
            setInvoices(updatedInvoices);
        }, TIME);
    };

    return (
        <div className={cx('content')}>
            <div className={cx('search-wrapper')}>
                <div action="" className={cx('search-form')}>
                    <input type="text" placeholder="Enter Vehicle Id" className={cx('search-input')} onChange={handleSearch} value={searchValue} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
            <div className={cx('table-wrapper')}>
                <table id={cx('invoice-table')}>
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
                                <tr key={invoice.id}>
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