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
        <div className={cx('wrapper')}>
            <div className={cx('area')}>
                <span className={cx('area-text')}>{area}</span>
            </div>
            <div className={cx('type')}>
                <span className={cx('type-text')}>{type}</span>
            </div>
            {lotRows.map((lotRow, index) => {
                console.log(lotRow);
                return (
                    <div key={index} className={cx('cell')} style={{ display: 'flex' }}>
                        {lotRow.cells.map((cell, index) => {
                            console.log(cell);
                            return (
                                <span
                                    key={index}
                                    className={cell.number % 2 !== 0 ? cx('cell-odd') : cx('cell-even')}
                                    style={
                                        cell.isParked
                                            ? { backgroundColor: 'var(--parked-color)', cursor: 'default' }
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
