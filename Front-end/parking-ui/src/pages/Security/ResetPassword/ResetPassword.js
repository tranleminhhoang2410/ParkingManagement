import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import { toast } from 'react-toastify';

import styles from './ResetPassword.module.scss';

import Button from '~/components/Button';

import { forgotPasswordUser, resetPassword } from '~/services/authService'

const cx = classNames.bind(styles);

function ResetPassword() {
    const token = new URL(window.location.href).searchParams.get('token');
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    useEffect(() => {
        const fetchForgotPasswordUser = async () => {
            const user = await forgotPasswordUser({ token: token });
            setUser(user);
        };
        try {
            fetchForgotPasswordUser();
        } catch (error) {
            console.log(error);
        }
    }, [token])

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await resetPassword({
                username: user.username,
                newPassword: newPassword,
                confirmNewPassword: confirmNewPassword,
            })
            toast.success('Reset password successfully!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={cx('wrapper')}>
            <form id={cx('reset-form')}>
                <div className={cx('input-group')}>
                    <label htmlFor="username" className={cx('input-label')}>
                        Username
                    </label>
                    <input type="text" id="username" name="username" className={cx('input-text')} value={user.username} readOnly />
                </div>
                <div className={cx('input-group')}>
                    <label htmlFor="new-password" className={cx('input-label')}>
                        New Password
                    </label>
                    <input type="password" id="new-password" name="new-password" className={cx('input-text')} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className={cx('input-group')}>
                    <label htmlFor="confirm-password" className={cx('input-label')}>
                        Confirm New Password
                    </label>
                    <input type="password" id="confirm-password" name="confirm-password" className={cx('input-text')} value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                </div>
                <Button primary className={cx('reset-btn')} onClick={handleResetPassword}>Reset Password</Button>
            </form>
        </div>
    );
}

export default ResetPassword;