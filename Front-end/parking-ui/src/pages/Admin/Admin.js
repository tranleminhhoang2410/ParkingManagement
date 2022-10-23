import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Admin.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faX, faUser } from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import Button from '~/components/Button';
import StackedColumnChart from '~/components/Charts/StackedColumnChart'

import { getAllVehicleTypesApi } from '~/services/vehicleTypeService';
import { getHighestParking, getLastedCheckout } from '~/services/invoiceService';

const cx = classNames.bind(styles);

function Admin() {
    const [priceTable, setPriceTable] = useState([]);
    const [highestIncome, setHighestIncome] = useState({});
    const [lastedCheckout, setLastedCheckout] = useState([]);

    useEffect(() => {
        const getPriceTable = async () => {
            const price = await getAllVehicleTypesApi();
            setPriceTable(price);
        };
        getPriceTable();
    }, []);

    useEffect(() => {
        const getHighestIncome = async () => {
            const income = await getHighestParking();
            setHighestIncome(income);
        };
        getHighestIncome();
    }, []);

    useEffect(() => {
        const fetchLastedCheckout = async () => {
            const lastedCheckout = await getLastedCheckout();
            setLastedCheckout(lastedCheckout);
        };
        fetchLastedCheckout();
    }, []);

    const renderVehicleTypeColor = (type) => {
        switch (type) {
            case 1:
                return 'var(--car-color)';
            case 2:
                return 'var(--bus-color)';
            case 3:
                return 'var(--truck-color)';
            default:
                return;
        }
    }

    return (
        <div className={cx('wrapper', 'mt-4')}>
            <div className={cx('statistic')}>
                <div className={cx('row')}>
                    <div className={cx('col-xl-4')}>
                        <div className={cx('overflow-hidden', 'card', 'mb-4')}>
                            <div className={cx('bg-primary', 'bg-soft')}>
                                <div className={cx('row')}>
                                    <div className={cx('col-7')}>
                                        <div className={cx('p-3')}>
                                            <h5 className={cx('font-size-15', 'text-white')}>Welcome Back !</h5>
                                            <p className={cx('font-size-12', 'text-white')}>Parking Dashboard</p>
                                        </div>
                                    </div>
                                    <div className={cx('col-5', 'align-self-end')}>
                                        <img
                                            src={require('~/assets/images/profile-img.png')}
                                            alt="avatar"
                                            className={cx('img-fluid')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('pt-0', 'card-body')}>
                                <div className={cx('row')}>
                                    <div className={cx('col-sm-4')}>
                                        <div className={cx('avatar-md', 'profile-user-wid', 'mb-4')}>
                                            <FontAwesomeIcon
                                                className={cx('img-thumbnail', 'rounded-circle')}
                                                icon={faUser}
                                            />
                                        </div>
                                        <h5 className={cx('font-size-15', 'text-truncate')}>Hoang Tran</h5>
                                        <p className={cx('text-muted', 'mb-0', 'text-truncate')}>UI/UX Designer</p>
                                    </div>
                                    <div className={cx('col-sm-8')}>
                                        <div className={cx('pt-4')}>
                                            <div className={cx('row')}>
                                                <div className={cx('col-6')}>
                                                    <h5 className={cx('font-size-15')}>125</h5>
                                                    <p className={cx('text-muted', 'mb-0')}>Projects</p>
                                                </div>
                                                <div className={cx('col-6')}>
                                                    <h5 className={cx('font-size-15')}>$1245</h5>
                                                    <p className={cx('text-muted', 'mb-0')}>Revenue</p>
                                                </div>
                                            </div>
                                            <div className={cx('mt-4')}>
                                                <Button
                                                    to="/admin/profile"
                                                    className={cx('btn', 'btn-primary', 'btn-profile')}
                                                >
                                                    View Profile <i className={cx('mdi', 'mdi-arrow-right', 'ms-1')} />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card')}>
                            <div className={cx('card-body')}>
                                <h5 className={cx('mb-4', 'h4', 'card-title')}>Monthly Earning</h5>
                                <div className={cx('row')}>
                                    <div className={cx('col-sm-6')}>
                                        <p className={cx('text-muted')}>This month</p>{' '}
                                        <h3>{highestIncome.monthTotalPrice && highestIncome.monthTotalPrice.toLocaleString('it-IT')} VNĐ</h3>
                                        <p className={cx('text-muted')}>
                                            <span className={cx('text-success', 'me-2')}>
                                                {highestIncome.data && (highestIncome.data.total / highestIncome.monthTotalPrice) * 100}%
                                                <i className={cx('mdi', 'mdi-arrow-up')} />
                                            </span>
                                            From {highestIncome.data && highestIncome.data.typeName}
                                        </p>
                                    </div>
                                    <div className={cx('col-sm-6')}>
                                        <div className={cx('mt-4', 'mt-sm-0')}>
                                            <CircularProgressbarWithChildren
                                                value={highestIncome.data && (highestIncome.data.total / highestIncome.monthTotalPrice) * 100}
                                                styles={{
                                                    root: {},
                                                    // Customize the path, i.e. the "completed progress"
                                                    path: {
                                                        // Path color
                                                        stroke: renderVehicleTypeColor(highestIncome.data && highestIncome.data.typeId),
                                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                        strokeLinecap: 'butt',
                                                        // Customize transition animation
                                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                                        // Rotate the path
                                                        transform: 'rotate(-0.5turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    // Customize the circle behind the path, i.e. the "total progress"
                                                    trail: {
                                                        // Trail color
                                                        stroke: '#d6d6d6',
                                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                        strokeLinecap: 'butt',
                                                        // Rotate the trail
                                                        transform: 'rotate(0.25turn)',
                                                        transformOrigin: 'center center',
                                                    },
                                                    // Customize the text
                                                    text: {
                                                        // Text color
                                                        fill: '#f88',
                                                        // Text size
                                                        fontSize: '16px',
                                                    },
                                                    // Customize background - only used when the `background` prop is true
                                                    background: {
                                                        fill: '#3e98c7',
                                                    }
                                                }}
                                            >
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>{highestIncome.data && (highestIncome.data.total / highestIncome.monthTotalPrice) * 100}%</strong>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-xl-8')}>
                        <div className={cx('row')}>
                            <div className={cx('col-md-4')}>
                                <div className={cx('mini-stats-wid', 'card')}>
                                    <div className={cx('card-body')}>
                                        <div className={cx('d-flex')}>
                                            <div className={cx('flex-grow-1')}>
                                                <p className={cx('text-muted', 'fw-medium')}>Orders</p>
                                                <h4 className={cx('mb-0')}>1,235</h4>
                                            </div>
                                            <div
                                                className={cx(
                                                    'mini-stat-icon',
                                                    'avatar-sm',
                                                    'rounded-circle',
                                                    'bg-primary',
                                                    'align-self-center',
                                                )}
                                            >
                                                <span className={cx('avatar-title')}>
                                                    <i className={cx('bx', 'bx-copy-alt', 'font-size-24')} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-4')}>
                                <div className={cx('mini-stats-wid', 'card')}>
                                    <div className={cx('card-body')}>
                                        <div className={cx('d-flex')}>
                                            <div className={cx('flex-grow-1')}>
                                                <p className={cx('text-muted', 'fw-medium')}>Revenue</p>
                                                <h4 className={cx('mb-0')}>$35, 723</h4>
                                            </div>
                                            <div
                                                className={cx(
                                                    'mini-stat-icon',
                                                    'avatar-sm',
                                                    'rounded-circle',
                                                    'bg-primary',
                                                    'align-self-center',
                                                )}
                                            >
                                                <span className={cx('avatar-title')}>
                                                    <i className={cx('bx', 'bx-archive-in', 'font-size-24')} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-4')}>
                                <div className={cx('mini-stats-wid', 'card')}>
                                    <div className={cx('card-body')}>
                                        <div className={cx('d-flex')}>
                                            <div className={cx('flex-grow-1')}>
                                                <p className={cx('text-muted', 'fw-medium')}>Average Price</p>
                                                <h4 className={cx('mb-0')}>$16.2</h4>
                                            </div>
                                            <div
                                                className={cx(
                                                    'mini-stat-icon',
                                                    'avatar-sm',
                                                    'rounded-circle',
                                                    'bg-primary',
                                                    'align-self-center',
                                                )}
                                            >
                                                <span className={cx('avatar-title')}>
                                                    <i className={cx('bx', 'bx-purchase-tag-alt', 'font-size-24')} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card', 'mt-4')}>
                            <div className={cx('card-body')} style={{ position: 'relative' }}>
                                <div className={cx('d-sm-flex', 'flex-wrap')}>
                                    <h5 className={cx('card-title', 'mb-4', 'h4', 'card-title')}>Vehicles</h5>
                                </div>
                                <div className="apex-charts">
                                    <StackedColumnChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('service', 'mt-4', 'mb-4')}>
                {/* Price table */}
                <div className={cx('row')}>
                    <div className={cx('col-lg-12')}>
                        <div className={cx('card')}>
                            <div className={cx('card-body')}>
                                <div className={cx('mb-4', 'h4', 'card-title')}>Parking Price</div>
                                <div className={cx('table-responsive')}>
                                    <table className={cx('table', 'align-middle', 'table-nowrap', 'mb-0')}>
                                        <thead className={cx('table-light')}>
                                            <tr>
                                                <th className={cx('align-middle')}>Vehicle Type Id</th>
                                                <th className={cx('align-middle')}>Vehicle Type</th>
                                                <th className={cx('align-middle')}>Price Per Hour</th>
                                                <th className={cx('align-middle')}>Price Per Day</th>
                                                <th className={cx('align-middle')}>Price Per Week</th>
                                                <th className={cx('align-middle')}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {priceTable.map((item) => (
                                                <tr key={item.id}>
                                                    <td>
                                                        <span className={cx('text-body', 'fw-bold')}>#{item.id}</span>
                                                    </td>
                                                    <td>{item.typeName}</td>
                                                    <td>
                                                        <span className={cx('p-1')}>
                                                            {item.pricePerHour.toLocaleString('it-It')}
                                                        </span>
                                                        VNĐ
                                                    </td>
                                                    <td>
                                                        <span className={cx('p-1')}>
                                                            {item.pricePerDay.toLocaleString('it-It')}
                                                        </span>{' '}
                                                        VNĐ
                                                    </td>
                                                    <td>
                                                        <span className={cx('p-1')}>
                                                            {item.pricePerWeek.toLocaleString('it-It')}
                                                        </span>{' '}
                                                        VNĐ
                                                    </td>

                                                    <td>
                                                        {/* <Button
                                                            style={{ with: '100%', textTransform: 'uppercase' }}
                                                            className={cx('btn', 'btn-success', 'edit-btn')}
                                                            leftIcon={<FontAwesomeIcon icon={faEdit} />}
                                                            type="submit"
                                                        >
                                                            edit
                                                        </Button> */}

                                                        <Button
                                                            style={{ width: '45%', textTransform: 'uppercase' }}
                                                            className={cx('btn', 'btn-success', 'save-btn')}
                                                            leftIcon={<FontAwesomeIcon icon={faCheck} />}
                                                            type="submit"
                                                        >
                                                            save
                                                        </Button>
                                                        <Button
                                                            style={{ width: '45%', textTransform: 'uppercase' }}
                                                            className={cx('btn', 'btn-danger', 'cancel-btn')}
                                                            leftIcon={<FontAwesomeIcon icon={faX} />}
                                                            type="submit"
                                                        >
                                                            cancel
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Check out table */}
                <div className={cx('row', 'mt-4', 'mb-4')}>
                    <div className={cx('col-lg-12')}>
                        <div className={cx('card')}>
                            <div className={cx('card-body')}>
                                <div className={cx('mb-4', 'h4', 'card-title')}>Latest Checked Out</div>
                                <div className={cx('table-responsive')}>
                                    <table className={cx('table', 'align-middle', 'table-nowrap', 'mb-0')}>
                                        <thead className={cx('table-light')}>
                                            <tr>
                                                <th className={cx('align-middle')}>Order ID</th>
                                                <th className={cx('align-middle')}>User Name</th>
                                                <th className={cx('align-middle')}>Vehicle Id</th>
                                                <th className={cx('align-middle')}>Slot</th>
                                                <th className={cx('align-middle')}>Checked In</th>
                                                <th className={cx('align-middle')}>Checked Out</th>
                                                <th className={cx('align-middle')}>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {lastedCheckout.map((item) => (
                                                <tr key={item.id}>
                                                    <td>
                                                        <span className={cx('text-body', 'fw-bold')}>#{item.id}</span>
                                                    </td>
                                                    <td>{item.userName}</td>
                                                    <td>{item.vehicleId}</td>
                                                    <td>{item.slotId}</td>
                                                    <td>{item.checkinTime}</td>
                                                    <td>{item.checkoutTime}</td>
                                                    <td>{item.totalPaid.toLocaleString('it-IT')} VNĐ</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
