import { useContext, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ChangePassword.module.scss';

import Button from '~/components/Button';

import { AuthContext } from '~/context/AuthContextProvider';

import { getAccountByUserId } from '~/services/accountService';
import { changePassword } from '~/services/authService';

import { toast } from 'react-toastify';


const cx = classNames.bind(styles);

function ChangePassword() {
    const [authState] = useContext(AuthContext);
    const [account, setAccount] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    //get account of user 
    useEffect(() => {
        if (!authState.user.id) return;
        const getAccount = async () => {
            const account = await getAccountByUserId(authState.user.id)
            setAccount(account);
        }
        try {
            getAccount();
        } catch (error) {
            console.log('ERROR');
        }
    }, [authState.user.id])

    async function handleChangePassword(e) {
        e.preventDefault();
        const [
            { value: username },
            { value: oldPassword },
            { value: newPassword },
            { value: confirmNewPassword },
        ] = e.target;
        const data = { username, oldPassword, newPassword, confirmNewPassword };
        try {
            await changePassword(data);
            toast.success('Change password successfully!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        } catch (err) {
            setErrorMsg(err);
        }
    }

    return (
        <div className={cx('wrapper')}>
            <form id={cx('change-password-form')} onSubmit={handleChangePassword}>
                <div className={cx('input-group')}>
                    <label htmlFor="username" className={cx('input-label')}>
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className={cx('input-text')}
                        value={account?.username}
                        readOnly
                    />
                    <p className={cx('error-message')}>{errorMsg}</p>
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
        </div>
    );
}

export default ChangePassword;
