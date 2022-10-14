import { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import styles from './Price.module.scss';
import classNames from 'classnames/bind';

import { getAllVehicleTypesApi } from '~/services/vehicleTypeService';

const cx = classNames.bind(styles);

function Price() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchVehicleTypesData = async () => {
            setData(await getAllVehicleTypesApi());
        };

        fetchVehicleTypesData();
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
