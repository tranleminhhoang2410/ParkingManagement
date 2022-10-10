import { useState, useEffect, useContext, useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './Invoices.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMagnifyingGlass, faTrash, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '~/context/AuthContextProvider';
import { getInvoiceByUserIdApi } from '~/services/invoiceService';
import Modal from 'react-modal';

import Pagination from '~/components/Pagination';
import Button from '~/components/Button';

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

    //Pagtination
    let pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const currentInvoicesPagination = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return invoices.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, pageSize, invoices]);

    //Modal
    const [modalIsOpen, setIsOpen] = useState(false);

    //Custom Style for Modal
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },

        content: {
            width: '40%',
            maxWidth: '100%',
            top: '40%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'none',
            border: 'none',
        },
    };

    //Confirm Modal
    function openModal(e) {
        e.preventDefault();
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-bar')}>
                <input type="text" className={cx('search-input')} />
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
            </div>
            <ul className={cx('invoices-list')}>
                {invoices &&
                    invoices.length > 0 &&
                    currentInvoicesPagination.map((invoice) => (
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
                            <div className={cx('info', 'series-code')}>
                                <div className={cx('info-group')}>
                                    <img src={require('../../assets/images/series.png')} alt="series-code" />
                                    <span className={cx('info-content')}>{invoice.id}</span>
                                </div>
                            </div>
                            <div className={cx('delete-btn')} onClick={openModal}>
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </li>
                    ))}
            </ul>
            <Pagination className={cx('pagination-bar')}
                currentPage={currentPage}
                totalCount={invoices.length}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)} />
            <Modal ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <div>
                    {/* Confirm Form */}
                    <form
                        style={{
                            padding: '16px',
                            borderRadius: '8px',
                            border: '2px solid var(--primary-border-color)',
                            backgroundColor: '#ffffe0',
                        }}
                        id="confirm-form"
                        className={cx('confirm-form')}
                    >
                        <h1 style={{ fontSize: '3rem', fontWeight: '500', color: 'var(--primary-color)' }}>
                            Do you want to delete this invoice ?
                        </h1>
                        <div
                            style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}
                            className="action-btn"
                        >
                            <Button
                                style={{ flex: '50%', textTransform: 'uppercase', backgroundColor: 'green' }}
                                className={cx('confirm-btn')}
                                primary
                                leftIcon={<FontAwesomeIcon icon={faCheck} />}
                                type="submit"
                            >
                                confirm
                            </Button>
                            <Button
                                style={{ flex: '50%', textTransform: 'uppercase', backgroundColor: 'red' }}
                                className={cx('cancel-btn')}
                                primary
                                leftIcon={<FontAwesomeIcon icon={faX} />}
                                type="button"
                                onClick={closeModal}
                            >
                                cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default Invoices;
