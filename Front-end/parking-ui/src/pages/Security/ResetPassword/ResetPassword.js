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
            if (newPassword !== '' && confirmNewPassword !== '') {
                if (confirmNewPassword === newPassword) {
                    await resetPassword({
                        username: user.username,
                        newPassword: newPassword,
                        confirmNewPassword: confirmNewPassword,
                    })
                    toast.success('Reset your password successfully!', {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                    navigate('/');
                } else {
                    toast.error('Confirm password does not match password!', {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                }
            } else {
                toast.error('All field must not be empty!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            }
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