import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ParkingArea.module.scss';

import { useContext } from 'react';
import { AuthContext, AUTH_ACTION } from '~/context/AuthContextProvider';

const cx = classNames.bind(styles);

function ParkingArea ({ area, type, lotRows = [] }) {
    const [authState, dispatch] = useContext(AuthContext);
    const { isLoggedIn } = authState;

    return (
        <div className={cx('wrapper')} style={type === 'CAR' ? { width: '8vw' } : { width: '10vw' }}>
            <div className={cx('area')}>
                <span className={cx('area-text')}>{area}</span>
            </div>
            <div className={cx('type')}>
                <span className={cx('type-text')}>{type}</span>
            </div>
            {lotRows.map((lotRow, index) => {
                return (
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
                                const isRedirect = !cell.isParked && isLoggedIn;
                                return (
                                    <Link
                                        key={index}
                                        to={isRedirect && `/parking/${parking_id}`}
                                        className={cell.number % 2 !== 0 ? cx('cell-odd') : cx('cell-even')}
                                        onClick={() => !isLoggedIn && dispatch({ type: AUTH_ACTION.OPEN_MODAL })}
                                        style={
                                            !cell.isParked
                                                ? {
                                                      backgroundColor: 'none',
                                                  }
                                                : {
                                                      display: 'block',
                                                      backgroundColor: 'var(--parked-color)',
                                                      cursor: 'default',
                                                  }
                                        }
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
                );
            })}
        </div>
    );
}

export default ParkingArea;
