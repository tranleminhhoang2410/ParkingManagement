import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ParkingArea.module.scss';

const cx = classNames.bind(styles);

function ParkingArea ({ area, type, lotRows = [] }) {
    // const lotRows = [
    //     {
    //         type: 'CAR',
    //         area: 'A',
    //         cells: [
    //             {
    //                 number: 1,
    //                 isParked: true,
    //             },
    //             {
    //                 number: 2,
    //                 isParked: false,
    //             },
    //         ],
    //     },
    //     {
    //         type: 'CAR',
    //         area: 'A',
    //         cells: [
    //             {
    //                 number: 3,
    //                 isParked: false,
    //             },
    //             {
    //                 number: 4,
    //                 isParked: false,
    //             },
    //         ],
    //     },
    //     {
    //         type: 'CAR',
    //         area: 'A',
    //         cells: [
    //             {
    //                 number: 5,
    //                 isParked: true,
    //             },
    //             {
    //                 number: 6,
    //                 isParked: false,
    //             },
    //         ],
    //     },
    //     {
    //         type: 'CAR',
    //         area: 'A',
    //         cells: [
    //             {
    //                 number: 7,
    //                 isParked: true,
    //             },
    //             {
    //                 number: 8,
    //                 isParked: false,
    //             },
    //         ],
    //     },
    //     {
    //         type: 'BUS',
    //         area: 'D',
    //         cells: [
    //             {
    //                 number: 1,
    //                 isParked: true,
    //             },
    //             {
    //                 number: 2,
    //                 isParked: false,
    //             },
    //         ],
    //     },
    //     {
    //         type: 'CAR',
    //         area: 'A',
    //         cells: [
    //             {
    //                 number: 1,
    //                 isParked: true,
    //             },
    //             {
    //                 number: 2,
    //                 isParked: false,
    //             },
    //         ],
    //     },
    //     {
    //         type: 'BUS',
    //         area: 'D',
    //         cells: [
    //             {
    //                 number: 1,
    //                 isParked: true,
    //             },
    //             {
    //                 number: 2,
    //                 isParked: false,
    //             },
    //         ],
    //     },
    // ];

    // console.log(lotRows);

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
                                return (
                                    <Link
                                        key={index}
                                        to={!cell.isParked && `/parking/${parking_id}`}
                                        className={cell.number % 2 !== 0 ? cx('cell-odd') : cx('cell-even')}
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
