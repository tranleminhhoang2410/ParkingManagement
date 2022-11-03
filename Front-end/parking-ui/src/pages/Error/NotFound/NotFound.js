import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('face')}>
                <div className={cx('band')}>
                    <div className={cx('red')}></div>
                    <div className={cx('white')}></div>
                    <div className={cx('blue')}></div>
                </div>
                <div className={cx('eyes')}></div>
                <div className={cx('dimple')}></div>
                <div className={cx('mouth')}></div>
            </div>

            <h1 style={{ color: 'var(--primary-color)' }}>Oops! Something went wrong!</h1>
            <Button primary to="/" className={cx('btn')}>
                Return to Home
            </Button>
        </div>
    );
}

export default NotFound;
