import classNames from 'classnames/bind';
import styles from './Row.module.scss';

const cx = classNames.bind(styles);

function Row ({ number }) {
    return (
        <>
            {number % 2 !== 0 ? (
                <div className={cx('rectangle-row', 'left')}>
                    <span className={cx('row-number')}>{number}</span>{' '}
                </div>
            ) : (
                <div className={cx('rectangle-row', 'right')}>
                    <span className={cx('row-number')}>{number}</span>
                </div>
            )}
        </>
    );
}

export default Row;
