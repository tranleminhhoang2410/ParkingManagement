import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ParkingArea.module.scss';

import { AuthContext, AUTH_ACTION } from '~/context/AuthContextProvider';

const cx = classNames.bind(styles);

function ParkingArea({ area, type, lotRows = [] }) {
    const [authState, dispatch] = useContext(AuthContext);
    const { isLoggedIn } = authState;
    const [hover, setHover] = useState(false);

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

                            const handleStatusOfRow = () => {
                                if (isLoggedIn) {
                                    if (!cell.isParked)
                                        return 'isEmpty';
                                    if (cell.isParked && (cell.userId === authState.user.id))
                                        return 'isMyParkedSlot';
                                    if (cell.isParked)
                                        return 'isParked';
                                } else {
                                    if (!cell.isParked) {
                                        return 'isEmpty';
                                    } else {
                                        return 'isParked';
                                    }
                                }
                            };

                            const handleStyleRow = (status, hover) => {
                                switch (status) {
                                    case 'isEmpty':
                                        return {};

                                    case 'isMyParkedSlot':
                                        return {
                                            display: 'block',
                                            backgroundColor: hover ? '#F0E68C' : 'var(--your-color)',
                                        };

                                    case 'isParked':
                                        return {
                                            display: 'block',
                                            backgroundColor: 'var(--parked-color)',
                                            cursor: 'default',
                                            pointerEvents: 'none'
                                        };

                                    default:
                                        return;
                                }
                            };

                            return (
                                <Link
                                    key={index}
                                    to={isLoggedIn && `/parking/${parking_id}`}
                                    state={{ status: handleStatusOfRow() }}
                                    className={cell.number % 2 !== 0 ? cx('cell-odd') : cx('cell-even')}
                                    onClick={() => !isLoggedIn && dispatch({ type: AUTH_ACTION.OPEN_MODAL })}
                                    onPointerOver={() => { handleStatusOfRow() === 'isMyParkedSlot' && setHover(true) }}
                                    onPointerOut={() => { handleStatusOfRow() === 'isMyParkedSlot' && setHover(false) }}
                                    style={handleStyleRow(handleStatusOfRow(), hover)}
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
