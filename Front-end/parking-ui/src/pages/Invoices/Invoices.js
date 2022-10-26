import { useState, useEffect, useContext, useMemo, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Invoices.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMagnifyingGlass, faTrash, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '~/context/AuthContextProvider';
import { getInvoiceByUserIdApi, deleteInvoiceApi } from '~/services/invoiceService';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Modal from 'react-modal';

import Pagination from '~/components/Pagination';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Invoices() {
    const [authState] = useContext(AuthContext);
    const [invoices, setInvoices] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const invoicesRef = useRef(null);
    const debounceTimeoutRef = useRef(null);
    useEffect(() => {
        if (!authState.user.id) return;
        const getInvoiceByUserId = async () => {
            const invoices = await getInvoiceByUserIdApi(authState.user.id);
            setInvoices(invoices);
            invoicesRef.current = invoices;
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
    const ref = useRef();

    const invoiceIdDelete = invoices.find((invoice) => invoice.id === ref.current)?.id;

    function openModal(e, id) {
        e.preventDefault();
        ref.current = id;
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleDeleteInvoice = async (e) => {
        try {
            e.preventDefault();
            await deleteInvoiceApi(ref.current);
            closeModal();
            setInvoices(await getInvoiceByUserIdApi(authState.user.id));
            setCurrentPage(1);
            toast.success(`Delete invoice '${ref.current}' successfully!`, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        } catch (error) {
            console.log(error);
        }
    };

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
        <div className={cx('wrapper')}>
            <div className={cx('search-bar')}>
                <input type="text" className={cx('search-input')} onChange={handleSearch} value={searchValue} />
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
                                        Total Price
                                    </label>
                                    <span className={cx('info-content')}>
                                        {invoice.totalPaid.toLocaleString('it-IT')} VNĐ
                                    </span>
                                </div>
                            </div>
                            <div className={cx('info', 'series-code')}>
                                <div className={cx('info-group')}>
                                    <img src={require('../../assets/images/series.png')} alt="series-code" />
                                    <span className={cx('info-content')}>{invoice.id}</span>
                                </div>
                            </div>
                            <div className={cx('delete-btn')} onClick={(e) => openModal(e, invoice.id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </li>
                    ))}
            </ul>
            <Pagination
                className={cx('pagination-bar')}
                currentPage={currentPage}
                totalCount={invoices.length}
                pageSize={pageSize}
                onPageChange={(page) => setCurrentPage(page)}
            />
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
                        onSubmit={handleDeleteInvoice}
                    >
                        <h1 style={{ fontSize: '3rem', fontWeight: '500', color: 'var(--primary-color)' }}>
                            Do you want to delete invoice {invoiceIdDelete}?
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
