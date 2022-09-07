import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ParkingArea.module.scss';

import { AuthContext, AUTH_ACTION } from '~/context/AuthContextProvider';

const cx = classNames.bind(styles);

function ParkingArea({ area, type, lotRows = [] }) {
    const [authState, dispatch] = useContext(AuthContext);
    const { isLoggedIn } = authState;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('area')}>
                <span className={cx('area-text')}>{area}</span>
            </div>
            <div className={cx('type')}>
                <span className={cx('type-text')}>{type}</span>
            </div>
            {lotRows.map((lotRow, index) => (
                <div
                    key={index}
                    className={cx('cells')}
                    style={lotRow.type.toUpperCase() === type && lotRow.area === area
                        ? { display: 'flex' }
                        : { display: 'none' }}
                >
                    {lotRow.type.toUpperCase() === type && lotRow.area === area ? (
                        lotRow.cells.map((cell, index) => {
                            const parking_id = lotRow.area + cell.number;
                            const isRedirect = !cell.isParked && isLoggedIn;

                            const handleStatusOfRow = () => {
                                if (!cell.isParked)
                                    return 'isEmpty';
                                if (cell.isParked && (cell.userId === authState.user.id))
                                    return 'isMyParkedSlot';
                                if (cell.isParked)
                                    return 'isParked';
                            };

                            const handleColorRow = (status) => {
                                switch (status) {
                                    case 'isEmpty':
                                        return {};

                                    case 'isMyParkedSlot':
                                        return {
                                            display: 'block',
                                            backgroundColor: 'var(--your-color)'
                                        };

                                    case 'isParked':
                                        return {
                                            display: 'block',
                                            backgroundColor: 'var(--parked-color)',
                                            cursor: 'default'
                                        };

                                    default:
                                        return;
                                }
                            };
                            return (
                                <Link
                                    key={index}
                                    to={isRedirect && `/parking/${parking_id}`}
                                    className={cell.number % 2 !== 0 ? cx('cell-odd') : cx('cell-even')}
                                    onClick={() => !isLoggedIn && dispatch({ type: AUTH_ACTION.OPEN_MODAL })}
                                    style={handleColorRow(handleStatusOfRow())}
                                >
                                    <span>
                                        {lotRow.area}
                                        {cell.number}
                                    </span>
                                </Link>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ParkingArea;
