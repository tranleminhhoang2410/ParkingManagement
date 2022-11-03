import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Admin.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEdit,
    faCheck,
    faX,
    faUser,
    faWallet,
    faFileInvoiceDollar,
    faChartSimple,
} from '@fortawesome/free-solid-svg-icons';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Button from '~/components/Button';

import { getAllVehicleTypesApi, updateVehicleTypePrice } from '~/services/vehicleTypeService';
import {
    getHighestParking,
    getLastedCheckout,
    getMonthlyParkingType,
    invoiceStatistic,
} from '~/services/invoiceService';

import { AuthContext } from '~/context/AuthContextProvider';

const cx = classNames.bind(styles);

function Admin() {
    const [priceTable, setPriceTable] = useState([]);
    const [highestIncome, setHighestIncome] = useState({});
    const [lastedCheckout, setLastedCheckout] = useState([]);
    const [monthlyParking, setMonthlyParking] = useState([]);
    const [statistic, setStatistic] = useState({});
    const [editRow, setEditRow] = useState(null);
    const [authState] = useContext(AuthContext);

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

    useEffect(() => {
        const fetchMonthlyParkingType = async () => {
            const monthlyParking = await getMonthlyParkingType();
            setMonthlyParking(monthlyParking);
        };
        fetchMonthlyParkingType();
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
    };

    const handleEditRow = (rowId) => {
        setEditRow(rowId);
    };

    const handleCancelEditRow = () => {
        setEditRow(null);
    };

    const handleSavePrice = async () => {
        const submittedRow = priceTable.find((p) => p.id === editRow);
        try {
            const response = await updateVehicleTypePrice(submittedRow);
            setPriceTable(response);
        } catch (error) {
            console.log(error);
        } finally {
            setEditRow(null);
        }
    };

    const handleDataOnBlur = (e, rowId, field) => {
        const data = e.target.innerText;
        const price = Number(data.replace(/\./g, ''));
        const rowIndex = priceTable.findIndex((p) => p.id === rowId);
        const updatedRow = { ...priceTable[rowIndex], [field]: price };
        const updatedPricetable = [...priceTable];
        updatedPricetable[rowIndex] = updatedRow;
        setPriceTable(updatedPricetable);
    };

    useEffect(() => {
        const fetchStatistic = async () => {
            const statistic = await invoiceStatistic();
            setStatistic(statistic);
        };
        fetchStatistic();
    }, []);

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
                                        <h5 className={cx('font-size-15', 'text-truncate')}>{authState.user.name}</h5>
                                        <p className={cx('text-muted', 'mb-0', 'text-truncate')}>{authState.role}</p>
                                    </div>
                                    <div className={cx('col-sm-8')}>
                                        <div className={cx('pt-4')}>
                                            <div className={cx('row')}>
                                                <div className={cx('col-6')}>
                                                    <h5 className={cx('font-size-15')}>{authState.user.id}</h5>
                                                    <p className={cx('text-muted', 'mb-0')}>ID</p>
                                                </div>
                                                <div className={cx('col-6')}>
                                                    <h5 className={cx('font-size-15')}>{authState.user.phone}</h5>
                                                    <p className={cx('text-muted', 'mb-0')}>Phone</p>
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
                                        <h3>
                                            {highestIncome.monthTotalPrice &&
                                                highestIncome.monthTotalPrice.toLocaleString('it-IT')}{' '}
                                            VNĐ
                                        </h3>
                                        <p className={cx('text-muted')}>
                                            <span className={cx('text-success', 'me-2')}>
                                                {highestIncome.data &&
                                                    Math.round(
                                                        (highestIncome.data.total / highestIncome.monthTotalPrice) *
                                                            100 *
                                                            100,
                                                    ) / 100}
                                                %
                                                <i className={cx('mdi', 'mdi-arrow-up')} />
                                            </span>
                                            From {highestIncome.data && highestIncome.data.typeName}
                                        </p>
                                    </div>
                                    <div className={cx('col-sm-6')}>
                                        <div className={cx('mt-4', 'mt-sm-0')}>
                                            <CircularProgressbarWithChildren
                                                value={
                                                    highestIncome.data &&
                                                    Math.round(
                                                        (highestIncome.data.total / highestIncome.monthTotalPrice) *
                                                            100 *
                                                            100,
                                                    ) / 100
                                                }
                                                styles={{
                                                    root: {},
                                                    // Customize the path, i.e. the "completed progress"
                                                    path: {
                                                        // Path color
                                                        stroke: renderVehicleTypeColor(
                                                            highestIncome.data && highestIncome.data.typeId,
                                                        ),
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
                                                    },
                                                }}
                                            >
                                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                                    <strong>
                                                        {highestIncome.data &&
                                                            Math.round(
                                                                (highestIncome.data.total /
                                                                    highestIncome.monthTotalPrice) *
                                                                    100 *
                                                                    100,
                                                            ) / 100}
                                                        %
                                                    </strong>
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
                                                <h4 className={cx('mb-0')}>{statistic && statistic.totalInvoice}</h4>
                                            </div>
                                            <div
                                                className={cx(
                                                    'mini-stat-icon',
                                                    'statistic-icon-wrapper',
                                                    'rounded-circle',
                                                    'bg-primary',
                                                    'align-self-center',
                                                )}
                                            >
                                                <FontAwesomeIcon className={cx('statistic-icon')} icon={faWallet} />
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
                                                <h4 className={cx('mb-0')}>
                                                    {statistic.revenue && statistic.revenue.toLocaleString('it-IT')} VNĐ
                                                </h4>
                                            </div>
                                            <div
                                                className={cx(
                                                    'mini-stat-icon',
                                                    'statistic-icon-wrapper',
                                                    'rounded-circle',
                                                    'bg-primary',
                                                    'align-self-center',
                                                )}
                                            >
                                                <FontAwesomeIcon
                                                    className={cx('statistic-icon')}
                                                    icon={faFileInvoiceDollar}
                                                />
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
                                                <h4 className={cx('mb-0')}>
                                                    {statistic.average && statistic.average.toLocaleString('it-IT')} VNĐ
                                                </h4>
                                            </div>
                                            <div
                                                className={cx(
                                                    'mini-stat-icon',
                                                    'statistic-icon-wrapper',
                                                    'rounded-circle',
                                                    'bg-primary',
                                                    'align-self-center',
                                                )}
                                            >
                                                <FontAwesomeIcon
                                                    className={cx('statistic-icon')}
                                                    icon={faChartSimple}
                                                />
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
                                    <BarChart
                                        width={700}
                                        height={300}
                                        data={monthlyParking}
                                        margin={{
                                            top: 20,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />s
                                        <XAxis dataKey="month" />
                                        <YAxis
                                            label={{
                                                value: 'Vehicles parked this year',
                                                angle: -90,
                                                position: 'insideBottomLeft',
                                            }}
                                        />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="car" stackId="a" fill="var(--car-color)" />
                                        <Bar dataKey="bus" stackId="a" fill="var(--bus-color)" />
                                        <Bar dataKey="truck" stackId="a" fill="var(--truck-color)" />
                                    </BarChart>
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
                                                        <span
                                                            contentEditable={editRow === item.id}
                                                            suppressContentEditableWarning
                                                            onBlur={(e) => handleDataOnBlur(e, item.id, 'pricePerHour')}
                                                            className={cx('p-1')}
                                                        >
                                                            {item.pricePerHour.toLocaleString('it-It')}
                                                        </span>
                                                        VNĐ
                                                    </td>
                                                    <td>
                                                        <span
                                                            contentEditable={editRow === item.id}
                                                            suppressContentEditableWarning
                                                            className={cx('p-1')}
                                                            onBlur={(e) => handleDataOnBlur(e, item.id, 'pricePerDay')}
                                                        >
                                                            {item.pricePerDay.toLocaleString('it-It')}
                                                        </span>{' '}
                                                        VNĐ
                                                    </td>
                                                    <td>
                                                        <span
                                                            contentEditable={editRow === item.id}
                                                            suppressContentEditableWarning
                                                            className={cx('p-1')}
                                                            onBlur={(e) => handleDataOnBlur(e, item.id, 'pricePerWeek')}
                                                        >
                                                            {item.pricePerWeek.toLocaleString('it-It')}
                                                        </span>{' '}
                                                        VNĐ
                                                    </td>

                                                    <td>
                                                        {!editRow && (
                                                            <Button
                                                                s
                                                                style={{ with: '100%', textTransform: 'uppercase' }}
                                                                className={cx('btn', 'btn-success', 'edit-btn')}
                                                                leftIcon={<FontAwesomeIcon icon={faEdit} />}
                                                                onClick={() => handleEditRow(item.id)}
                                                            >
                                                                Edit
                                                            </Button>
                                                        )}

                                                        {editRow === item.id && (
                                                            <>
                                                                <Button
                                                                    style={{ width: '45%', textTransform: 'uppercase' }}
                                                                    className={cx('btn', 'btn-success', 'save-btn')}
                                                                    leftIcon={<FontAwesomeIcon icon={faCheck} />}
                                                                    onClick={() => handleSavePrice()}
                                                                >
                                                                    Save
                                                                </Button>
                                                                <Button
                                                                    style={{ width: '45%', textTransform: 'uppercase' }}
                                                                    className={cx('btn', 'btn-danger', 'cancel-btn')}
                                                                    leftIcon={<FontAwesomeIcon icon={faX} />}
                                                                    onClick={() => handleCancelEditRow()}
                                                                >
                                                                    Cancel
                                                                </Button>
                                                            </>
                                                        )}
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
