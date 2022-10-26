import { useState, useEffect } from 'react';
import styles from './Price.module.scss';
import classNames from 'classnames/bind';

import { getAllVehicleTypesApi } from '~/services/vehicleTypeService';

const cx = classNames.bind(styles);

function Price() {
    const [price, setPrice] = useState([]);

    useEffect(() => {
        const fetchVehicleTypesData = async () => {
            setPrice(await getAllVehicleTypesApi());
        };

        fetchVehicleTypesData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Price Per Hour</th>
                        <th>Price Per Day</th>
                        <th>Price Per Week</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        price.map(price =>
                            <tr key={price.id}>
                                <td>{price.typeName}</td>
                                <td>{price.pricePerHour.toLocaleString('it-IT')} VNĐ</td>
                                <td>{price.pricePerDay.toLocaleString('it-IT')} VNĐ</td>
                                <td>{price.pricePerWeek.toLocaleString('it-IT')} VNĐ</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Price;
