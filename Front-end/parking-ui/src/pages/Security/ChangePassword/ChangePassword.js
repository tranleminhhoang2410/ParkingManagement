import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ChangePassword.module.scss';

import Button from '~/components/Button';

import { AuthContext } from '~/context/AuthContextProvider';
import { changePassword } from '~/services/authService';

const cx = classNames.bind(styles);

function ChangePassword() {
    const [authState] = useContext(AuthContext);
    const username = authState.user.name;
    console.log(authState);

    // const handleChangePassword = async (event) => {
    //     event.preventDefault();

    //     await changePassword({
    //         username: username,
    //     });
    // };

    return (
        <form id={cx('change-password-form')}>
            <div className={cx('input-group')}>
                <label htmlFor="username" className={cx('input-label')}>
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className={cx('input-text')}
                    value={username}
                    readOnly
                />
            </div>
            <div className={cx('input-group')}>
                <label htmlFor="old-password" className={cx('input-label')}>
                    Old password
                </label>
                <input type="password" name="old-password" id="old-password" className={cx('input-text')} />
            </div>
            <div className={cx('input-group')}>
                <label htmlFor="new-password" className={cx('input-label')}>
                    New password
                </label>
                <input type="text" name="new-password" id="new-password" className={cx('input-text')} />
            </div>
            <div className={cx('input-group')}>
                <label htmlFor="confirm-new-password" className={cx('input-label')}>
                    Confirm new password
                </label>
                <input type="text" name="confirm-new-password" id="confirm-new-password" className={cx('input-text')} />
            </div>
            <Button primary className={cx('change-btn')}>
                change password
            </Button>
        </form>
    );
}

export default ChangePassword;
