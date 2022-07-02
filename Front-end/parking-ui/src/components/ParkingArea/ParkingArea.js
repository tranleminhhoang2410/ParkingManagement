import classNames from 'classnames/bind';
import styles from './ParkingArea.module.scss';

const cx = classNames.bind(styles);

function ParkingArea ({ area, type }) {
    const cells = [
        {
            type: 'CAR',
            area: 'A',
            rows: [
                {
                    number: 1,
                    isParked: true,
                },
                {
                    number: 2,
                    isParked: false,
                },
            ],
        },
        {
            type: 'CAR',
            area: 'A',
            rows: [
                {
                    number: 3,
                    isParked: false,
                },
                {
                    number: 4,
                    isParked: false,
                },
            ],
        },
        {
            type: 'CAR',
            area: 'A',
            rows: [
                {
                    number: 5,
                    isParked: true,
                },
                {
                    number: 6,
                    isParked: false,
                },
            ],
        },
        {
            type: 'CAR',
            area: 'A',
            rows: [
                {
                    number: 7,
                    isParked: true,
                },
                {
                    number: 8,
                    isParked: false,
                },
            ],
        },
        {
            type: 'BUS',
            area: 'B',
            rows: [
                {
                    number: 1,
                    isParked: true,
                },
                {
                    number: 2,
                    isParked: false,
                },
            ],
        },
        {
            type: 'CAR',
            area: 'A',
            rows: [
                {
                    number: 1,
                    isParked: true,
                },
                {
                    number: 2,
                    isParked: false,
                },
            ],
        },
        {
            type: 'BUS',
            area: 'B',
            rows: [
                {
                    number: 1,
                    isParked: true,
                },
                {
                    number: 2,
                    isParked: false,
                },
            ],
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('area')}>
                <span className={cx('area-text')}>{area}</span>
            </div>
            <div className={cx('type')}>
                <span className={cx('type-text')}>{type}</span>
            </div>
            {cells.map((cell, index) => {
                return (
                    <div
                        key={index}
                        className={cx('cells')}
                        style={area === cell.area && type === cell.type ? { display: 'flex' } : { display: 'none' }}
                    >
                        {area === cell.area &&
                            type === cell.type &&
                            cell.rows.map((row, index) => {
                                return (
                                    <span
                                        key={index}
                                        className={row.number % 2 !== 0 ? cx('cell-odd') : cx('cell-even')}
                                        style={
                                            row.isParked
                                                ? { backgroundColor: 'var(--parked-color)' }
                                                : { backgroundColor: 'none' }
                                        }
                                    >
                                        {cell.area}
                                        {row.number}
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
