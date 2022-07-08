import { useParams } from 'react-router-dom';

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

    return <h1>Parking Detail of {parkingId}</h1>;
}

export default ParkingDetail;
