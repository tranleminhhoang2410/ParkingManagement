import { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import styles from './Price.module.scss';
import classNames from 'classnames/bind';

import { getAllVehicleTypesApi } from '~/services/vehicleTypeService';

const cx = classNames.bind(styles);

function Price() {
    // const data = useMemo(
    //     () => [
    //         {
    //             typeName: 'Car',
    //             pricePerHour: '10.000 VNĐ',
    //             pricePerDay: '100.000 VNĐ',
    //             pricePerWeek: '1.000.000 VNĐ',
    //             pricePerMonth: '1.000.000 VNĐ',
    //             pricePerYear: '4.000.000 VNĐ',
    //         },
    //         {
    //             typeName: 'Bus',
    //             pricePerHour: '10.000 VNĐ',
    //             pricePerDay: '100.000 VNĐ',
    //             pricePerWeek: '1.000.000 VNĐ',
    //             pricePerMonth: '1.000.000 VNĐ',
    //             pricePerYear: '4.000.000 VNĐ',
    //         },
    //         {
    //             typeName: 'Truck',
    //             pricePerHour: '10.000 VNĐ',
    //             pricePerDay: '100.000 VNĐ',
    //             pricePerWeek: '1.000.000 VNĐ',
    //             pricePerMonth: '1.000.000 VNĐ',
    //             pricePerYear: '4.000.000 VNĐ',
    //         },
    //     ],
    //     [],
    // );

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchVehicalTypesData = async () => {
            setData(await getAllVehicleTypesApi());
        };

        fetchVehicalTypesData();
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: 'Type',
                accessor: 'typeName',
            },
            {
                Header: 'Price Per Hour',
                accessor: 'pricePerHour',
            },
            {
                Header: 'Price Per Day',
                accessor: 'pricePerDay',
            },
            {
                Header: 'Price Per Week',
                accessor: 'pricePerWeek',
            },
            {
                Header: 'Price Per Month',
                accessor: 'pricePerMonth',
            },
            {
                Header: 'Price Per Year',
                accessor: 'pricePerYear',
            },
        ],
        [],
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div className={cx('price-table')}>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Price;
