import classNames from 'classnames/bind';
import styles from './Invoices.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Invoices() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-bar')}>
                <input type="text" className={cx('search-input')} />
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
            </div>
            <ul className={cx('invoices-list')}>
                <li className={cx('invoice-item')}>
                    <div className={cx('vehicle-image')}>
                        <FontAwesomeIcon icon={faCar} className={cx('vehicle-icon')} />
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Vehicle ID
                            </label>
                            <span className={cx('info-content')}>43A-123111</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Slot
                            </label>
                            <span className={cx('info-content')}>A1</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked in
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked out
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Time
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Price
                            </label>
                            <span className={cx('info-content')}>30000 VND</span>
                        </div>
                    </div>
                </li>
                <li className={cx('invoice-item')}>
                    <div className={cx('vehicle-image')}>
                        <FontAwesomeIcon icon={faCar} className={cx('vehicle-icon')} />
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Vehicle ID
                            </label>
                            <span className={cx('info-content')}>43A-123111</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Slot
                            </label>
                            <span className={cx('info-content')}>A1</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked in
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked out
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Time
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Price
                            </label>
                            <span className={cx('info-content')}>30000 VND</span>
                        </div>
                    </div>
                </li>
                <li className={cx('invoice-item')}>
                    <div className={cx('vehicle-image')}>
                        <FontAwesomeIcon icon={faCar} className={cx('vehicle-icon')} />
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Vehicle ID
                            </label>
                            <span className={cx('info-content')}>43A-123111</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Slot
                            </label>
                            <span className={cx('info-content')}>A1</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked in
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked out
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Time
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Price
                            </label>
                            <span className={cx('info-content')}>30000 VND</span>
                        </div>
                    </div>
                </li>
                <li className={cx('invoice-item')}>
                    <div className={cx('vehicle-image')}>
                        <FontAwesomeIcon icon={faCar} className={cx('vehicle-icon')} />
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Vehicle ID
                            </label>
                            <span className={cx('info-content')}>43A-123111</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Slot
                            </label>
                            <span className={cx('info-content')}>A1</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked in
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked out
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Time
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Price
                            </label>
                            <span className={cx('info-content')}>30000 VND</span>
                        </div>
                    </div>
                </li>
                <li className={cx('invoice-item')}>
                    <div className={cx('vehicle-image')}>
                        <FontAwesomeIcon icon={faCar} className={cx('vehicle-icon')} />
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Vehicle ID
                            </label>
                            <span className={cx('info-content')}>43A-123111</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Slot
                            </label>
                            <span className={cx('info-content')}>A1</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked in
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked out
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Time
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Price
                            </label>
                            <span className={cx('info-content')}>30000 VND</span>
                        </div>
                    </div>
                </li>
                <li className={cx('invoice-item')}>
                    <div className={cx('vehicle-image')}>
                        <FontAwesomeIcon icon={faCar} className={cx('vehicle-icon')} />
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Vehicle ID
                            </label>
                            <span className={cx('info-content')}>43A-123111</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Slot
                            </label>
                            <span className={cx('info-content')}>A1</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked in
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked out
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Time
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Price
                            </label>
                            <span className={cx('info-content')}>30000 VND</span>
                        </div>
                    </div>
                </li>
                <li className={cx('invoice-item')}>
                    <div className={cx('vehicle-image')}>
                        <FontAwesomeIcon icon={faCar} className={cx('vehicle-icon')} />
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Vehicle ID
                            </label>
                            <span className={cx('info-content')}>43A-123111</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Slot
                            </label>
                            <span className={cx('info-content')}>A1</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked in
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked out
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Time
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Price
                            </label>
                            <span className={cx('info-content')}>30000 VND</span>
                        </div>
                    </div>
                </li>
                <li className={cx('invoice-item')}>
                    <div className={cx('vehicle-image')}>
                        <FontAwesomeIcon icon={faCar} className={cx('vehicle-icon')} />
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Vehicle ID
                            </label>
                            <span className={cx('info-content')}>43A-123111</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Slot
                            </label>
                            <span className={cx('info-content')}>A1</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked in
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Checked out
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Time
                            </label>
                            <span className={cx('info-content')}>12:34:34</span>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-group')}>
                            <label htmlFor="" className={cx('info-label')}>
                                Total Price
                            </label>
                            <span className={cx('info-content')}>30000 VND</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Invoices;
