import classNames from 'classnames/bind';
import styles from './ParkingArea.module.scss';

const cx = classNames.bind(styles);

function ParkingArea ({ area, type, numberOfRows }) {
    // const renderCells = () => {
    //     for (let i = 0; i < numberOfRows * 2 - 1; i++) {
    //         return (
    //             <div className={cx('cells')}>
    //                 {i % 2 === 0 ? (
    //                     <span className={cx('cell-odd')}>
    //                         {area}
    //                         {i + 1}
    //                     </span>
    //                 ) : (
    //                     <span className={cx('cell-even')}>
    //                         {area}
    //                         {i + 1}
    //                     </span>
    //                 )}
    //             </div>
    //         );
    //     }
    // };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('area')}>
                <span className={cx('area-text')}>{area}</span>
            </div>
            <div className={cx('type')}>
                <span className={cx('type-text')}>{type}</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A1</span>
                <span className={cx('cell-even')}>A2</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A3</span>
                <span className={cx('cell-even')}>A4</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A5</span>
                <span className={cx('cell-even')}>A6</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A7</span>
                <span className={cx('cell-even')}>A8</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A1</span>
                <span className={cx('cell-even')}>A2</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A3</span>
                <span className={cx('cell-even')}>A4</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A5</span>
                <span className={cx('cell-even')}>A6</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A7</span>
                <span className={cx('cell-even')}>A8</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A1</span>
                <span className={cx('cell-even')}>A2</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A3</span>
                <span className={cx('cell-even')}>A4</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A5</span>
                <span className={cx('cell-even')}>A6</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A7</span>
                <span className={cx('cell-even')}>A8</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A1</span>
                <span className={cx('cell-even')}>A2</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A3</span>
                <span className={cx('cell-even')}>A4</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A5</span>
                <span className={cx('cell-even')}>A6</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A7</span>
                <span className={cx('cell-even')}>A8</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A5</span>
                <span className={cx('cell-even')}>A6</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A7</span>
                <span className={cx('cell-even')}>A8</span>
            </div>
            <div className={cx('cells')}>
                <span className={cx('cell-odd')}>A7</span>
                <span className={cx('cell-even')}>A8</span>
            </div>
            {/* {renderCells} */}
        </div>
    );
}

export default ParkingArea;
