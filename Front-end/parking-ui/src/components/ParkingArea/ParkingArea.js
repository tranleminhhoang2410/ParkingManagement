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
                    style={
                        lotRow.type.toUpperCase() === type && lotRow.area === area
                            ? { display: 'flex' }
                            : { display: 'none' }
                    }
                >
                    {lotRow.type.toUpperCase() === type && lotRow.area === area ? (
                        lotRow.cells.map((cell, index) => {
                            const parking_id = lotRow.area + cell.number;

                            const handleStatusOfRow = () => {
                                if (isLoggedIn) {
                                    if (!cell.isParked) return 'isEmpty';
                                    if (cell.isParked && cell.userId === authState.user.id) return 'isMyParkedSlot';
                                    if (cell.isParked) return 'isParked';
                                } else {
                                    if (!cell.isParked) {
                                        return 'isEmpty';
                                    } else {
                                        return 'isParked';
                                    }
                                }
                            };

                            const handleClassOfRow = (status, number) => {
                                switch (status) {
                                    case 'isEmpty':
                                        if (number % 2 !== 0) return cx('cell-odd');
                                        else return cx('cell-even');
                                    case 'isMyParkedSlot':
                                        if (number % 2 !== 0) return cx('cell-odd', 'my-parked');
                                        else return cx('cell-even', 'my-parked');
                                    case 'isParked':
                                        if (number % 2 !== 0) return cx('cell-odd', 'is-parked');
                                        else return cx('cell-even', 'is-parked');

                                    default:
                                        return;
                                }
                            };

                            return (
                                <Link
                                    key={index}
                                    to={isLoggedIn && `/parking/${parking_id}`}
                                    state={{ status: handleStatusOfRow() }}
                                    className={handleClassOfRow(handleStatusOfRow(), cell.number)}
                                    onClick={() => !isLoggedIn && dispatch({ type: AUTH_ACTION.OPEN_MODAL })}
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
