import classNames from 'classnames/bind';
import styles from './Parking.module.scss';

import ParkingArea from '~/components/ParkingArea';
import Note from '~/components/Note';

import { useEffect, useState } from 'react';
import { getAllSlots } from '~/services/slotService';
import { ToastContainer } from 'react-toastify';

const cx = classNames.bind(styles);

function Parking() {
    //notes
    const notes = [
        {
            title: <div style={{ backgroundColor: 'var(--empty-color)', width: '28px', height: '20px' }}></div>,
            value: 'Empty',
            subvalue: 'Click on that slot to check in',
        },
        {
            title: <div style={{ backgroundColor: 'var(--parked-color)', width: '28px', height: '20px' }}></div>,
            value: 'Parked',
            subvalue: 'Do not click on that slot',
        },
        {
            title: <div style={{ backgroundColor: 'var(--your-color)', width: '28px', height: '20px' }}></div>,
            value: 'Your slot',
            color: 'var(--your-color)',
            subvalue: 'Click on your slot to check out',
        },
    ];

    //fetch Slot DATA
    const [lotRows, setLotRows] = useState([]);

    useEffect(() => {
        const fetchSlotsData = async () => {
            const lotRows = await getAllSlots();
            setLotRows(lotRows);
        };
        fetchSlotsData();
    }, []);

    // lotRows.c

    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: 'auto', height: '100%' }}>
            <div className={cx('wrapper')}>
                <div className={cx('parking-diagram')}>
                    <div className={cx('parking-area')}>
                        <ParkingArea lotRows={lotRows} area="E" type="TRUCK" className={cx('parking-area-item')} />
                        <ParkingArea lotRows={lotRows} area="D" type="BUS" className={cx('parking-area-item')} />
                        <ParkingArea lotRows={lotRows} area="C" type="CAR" className={cx('parking-area-item')} />
                        <ParkingArea lotRows={lotRows} area="B" type="CAR" className={cx('parking-area-item')} />
                        <ParkingArea lotRows={lotRows} area="A" type="CAR" className={cx('parking-area-item')} />
                    </div>
                    <div className={cx('notes')}>
                        {notes.map((note, index) => {
                            return <Note key={index} title={note.title} value={note.value} subvalue={note.subvalue} />;
                        })}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Parking;
