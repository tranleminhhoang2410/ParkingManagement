import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ForgotPassword.module.scss';

import { forgotPassword } from '~/services/emailService'

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    const handleSendEmail = async (e) => {
        e.preventDefault();
        try {
            const response = await forgotPassword({ username: username });
            setMessage(response.success);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <form id={cx('forgot-form')}>
                <div className={cx('input-group')}>
                    <label htmlFor="username" className={cx('input-label')}>
                        Username
                    </label>
                    <input type="text" id="username" name="username" className={cx('input-text')} value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                {message && <span style={{ textAlign: 'center', color: 'var(--primary-color)' }}>{message}</span>}
                <Button primary className={cx('send-btn')} onClick={handleSendEmail}>Send Email</Button>
            </form>
        </div>
    );
}

export default ForgotPassword;
