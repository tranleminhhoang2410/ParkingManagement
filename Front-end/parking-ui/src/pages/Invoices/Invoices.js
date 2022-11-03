import { useState, useEffect, useContext, useMemo, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Invoices.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '~/context/AuthContextProvider';
import { getInvoiceByUserIdApi, deleteInvoiceApi } from '~/services/invoiceService';

import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Pagination from '~/components/Pagination';
import ConfirmModal from '~/components/Modal/ConfirmModal';

const cx = classNames.bind(styles);

function Invoices() {
    const [authState] = useContext(AuthContext);
    const [invoices, setInvoices] = useState([]);
    const [modalType, setModalType] = useState(null);
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

    //Confirm Modal
    const ref = useRef();

    function openModal(e, type, id) {
        e.preventDefault();
        ref.current = id;
        setModalType(type);
    }

    function closeModal() {
        setModalType(null);
    }

    const invoiceIdDelete = invoices.find((invoice) => invoice.id === ref.current)?.id;
    const handleDeleteInvoice = async (e) => {
        e.preventDefault();
        try {
            if (invoiceIdDelete) {
                await deleteInvoiceApi(invoiceIdDelete);
                closeModal();
                setInvoices(await getInvoiceByUserIdApi(authState.user.id));
                setCurrentPage(1);
                toast.success(`Delete invoice '${invoiceIdDelete}' successfully!`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            } else {
                return;
            }
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
                <input
                    placeholder="Enter Vehicle's Id"
                    type="text"
                    className={cx('search-input')}
                    onChange={handleSearch}
                    value={searchValue}
                />
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
                            <div className={cx('delete-btn')} onClick={(e) => openModal(e, 'delete', invoice.id)}>
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
            {modalType === 'delete' && (
                <ConfirmModal
                    onClose={closeModal}
                    onConfirm={handleDeleteInvoice}
                    content={`delete invoice '${invoiceIdDelete}'`}
                />
            )}
        </div>
    );
}

export default Invoices;
