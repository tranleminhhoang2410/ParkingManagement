// import styles from './Price.module.scss';
// import { classNames } from 'classnames/bind';

function Price () {
    const dataTable = [
        {
            type: 'car',
            pricePerHour: '10.000 VNĐ',
            pricePerDay: '100.000 VNĐ',
            pricePerMonth: '1.000.000 VNĐ',
            pricePerYear: '4.000.000 VNĐ',
        },
        {
            type: 'bus',
            pricePerHour: '10.000 VNĐ',
            pricePerDay: '100.000 VNĐ',
            pricePerMonth: '1.000.000 VNĐ',
            pricePerYear: '4.000.000 VNĐ',
        },
        {
            type: 'truck',
            pricePerHour: '10.000 VNĐ',
            pricePerDay: '100.000 VNĐ',
            pricePerMonth: '1.000.000 VNĐ',
            pricePerYear: '4.000.000 VNĐ',
        },
    ];
    return <h1>Price Page</h1>;
}

export default Price;
