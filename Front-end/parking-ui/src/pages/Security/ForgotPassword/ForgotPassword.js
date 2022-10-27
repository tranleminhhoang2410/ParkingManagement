import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ForgotPassword.module.scss';

import { toast } from 'react-toastify';

import { forgotPassword } from '~/services/emailService'

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    const handleSendEmail = async (e) => {
        e.preventDefault();
        try {
            if (username !== '') {
                const response = await forgotPassword({ username: username });
                setMessage(response.success);
            } else {
                toast.error('Username must not be empty!', {
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
            toast.error(`${error.error}`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const handleChangeInput = (e) => {
        setUsername(e.target.value);
        setMessage('');
    }

    return (
        <div className={cx('wrapper')}>
            <form id={cx('forgot-form')}>
                <div className={cx('input-group')}>
                    <label htmlFor="username" className={cx('input-label')}>
                        Username
                    </label>
                    <input type="text" id="username" name="username" className={cx('input-text')} value={username} onChange={handleChangeInput} />
                </div>
                {message && <span style={{ textAlign: 'center', color: 'var(--primary-color)' }}>{message}</span>}
                <Button primary className={cx('send-btn')} onClick={handleSendEmail}>Send Email</Button>
            </form>
        </div>
    );
}

export default ForgotPassword;
