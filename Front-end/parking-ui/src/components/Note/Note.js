import classNames from 'classnames/bind';
import styles from './Note.module.scss';

const cx = classNames.bind(styles);

function Note({ title, value, subvalue }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('type')}>
                <span className={cx('title')}>{title}</span>
                <span className={cx('value')}>{value}</span>
            </div>
            <span className={cx('sub-value')}>({subvalue})</span>
        </div>
    );
}

export default Note;
