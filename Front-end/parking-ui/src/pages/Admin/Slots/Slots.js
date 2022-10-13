import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Slots.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBus, faTruck } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button'
import { getSlotByVehicleTypeId } from '~/services/slotService';

const cx = classNames.bind(styles);

function Slots() {
    const [tab, setTab] = useState(1);
    const [slots, setSlots] = useState([]);


    const getIconOfVehicle = (id) => {
        switch (id) {
            case 1:
                return faCar;
            case 2:
                return faBus;
            case 3:
                return faTruck;
            default:
                return;
        }
    };

    const getClassOfVehicle = (id) => {
        switch (id) {
            case 1:
                return 'car';
            case 2:
                return 'bus';
            case 3:
                return 'truck';
            default:
                return;
        }
    };

    useEffect(() => {
        const getAllSlotsByVehicleType = async () => {
            const slots = await getSlotByVehicleTypeId(tab);
            setSlots(slots);
        }
        getAllSlotsByVehicleType();
    }, [tab])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tab-title')}>
                <Button onClick={() => setTab(1)} leftIcon={<FontAwesomeIcon icon={faCar} />} className={tab === 1 ? cx('tab-button', 'car', 'active') : cx('tab-button', 'car')}>Car</Button>
                <Button onClick={() => setTab(2)} leftIcon={<FontAwesomeIcon icon={faBus} />} className={tab === 2 ? cx('tab-button', 'bus', 'active') : cx('tab-button', 'bus')}>Bus</Button>
                <Button onClick={() => setTab(3)} leftIcon={<FontAwesomeIcon icon={faTruck} />} className={tab === 3 ? cx('tab-button', 'truck', 'active') : cx('tab-button', 'truck')}>Truck</Button>
                {/* {slots.map(slot => <Button key={slot} onClick={() => setTab(slot.vehicleTypeId)} leftIcon={<FontAwesomeIcon icon={getIconOfVehicle(slot.vehicleTypeId)} />} className={tab === slot.vehicleTypeId ? cx('tab-button', `${slot.vehicleTypeName}`, 'active') : cx('tab-button', `${slot.vehicleTypeName}`)}>{slot.vehicleTypeName}</Button>)} */}
            </div>
            <div className={cx('tab-content')}>
                <table className={cx('invoice-table')}>
                    <thead className={cx(getClassOfVehicle(tab))}>
                        <tr>
                            <th>Slot Id</th>
                            <th>Vehicle Id</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slots.map(slot =>
                            <tr key={slot}>
                                <td className={cx('slot-txt')}>{slot.area}{slot.position}</td>
                                <td className={cx(`${slot.vehicleTypeName.toLowerCase()}-txt`)}>{slot.status && 'Vehicle Id'}</td>
                                <td style={slot.status ? { color: 'var(--parked-color)' } : { color: '#333' }}>{slot.status ? 'Parking' : 'Empty'}</td>
                                <td>{slot.status ? (
                                    <Button className={cx('view-btn')}>View Details</Button>
                                ) : (
                                    <Button className={cx('maintenance-btn')}>Maintenance</Button>
                                )}</td>
                            </tr>
                        )}
                        {/* <tr>
                            <td >Restaurante</td>
                            <td>Controle de fluxo</td>
                            <td>Erick Jacquin</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td >Relatório</td>
                            <td>Gerador </td>
                            <td>Elon Musk</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td >Financeiro</td>
                            <td>Controle</td>
                            <td>Bill Gates</td>
                            <td>2</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Slots;