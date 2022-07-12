import classNames from 'classnames/bind';
import styles from './ParkingDetail.module.scss';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function ParkingDetail () {
    // const { id } = useParams;
    const parkingId = useParams().id;
    // console.log(parkingId);
    // const [parkingSlot, setParkingSlot] = useState([]);

    // useEffect(() => {
    //     const fetchSlotDetail = async () => {
    //         setParkingSlot(await getSlotById(parkingId));
    //     };

    //     fetchSlotDetail();
    // }, [parkingId]);

    // console.log(parkingSlot.area);

    return (
        <div className={cx('wrapper')}>
            <h1>Parking Detail of {parkingId}</h1>
        </div>
    );
}

export default ParkingDetail;
