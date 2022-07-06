import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ParkingArea.module.scss';

import { getAllSlotsApi } from '~/services/slotService';

const cx = classNames.bind(styles);

function ParkingArea ({ area, type }) {
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

    const [lotRows, setLotRows] = useState([]);

    useEffect(() => {
        fetchSlotsData();
    }, []);

    const fetchSlotsData = async () => {
        setLotRows(await getAllSlotsApi());
    };

    return (
        <div className={cx('wrapper')}>
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
                        className={cx('cell')}
                        style={area === lotRow.area && type === lotRow.type ? { display: 'flex' } : { display: 'none' }}
                    >
                        {area === lotRow.area &&
                            type === lotRow.type &&
                            lotRow.cells.map((cell, index) => {
                                return (
                                    <span
                                        key={index}
                                        className={cell.number % 2 !== 0 ? cx('cell-odd') : cx('cell-even')}
                                        style={
                                            cell.isParked
                                                ? { backgroundColor: 'var(--parked-color)' }
                                                : { backgroundColor: 'none' }
                                        }
                                    >
                                        {lotRow.area}
                                        {cell.number}
                                    </span>
                                );
                            })}
                    </div>
                );
            })}
        </div>
    );
}

export default ParkingArea;
