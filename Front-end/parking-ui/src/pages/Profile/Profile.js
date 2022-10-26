import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import Button from '~/components/Button';

import { getLoggedUser, updateProfile } from '~/services/userService';
import { getAllCities, getDistrictByCity, getWardByDistrict } from '~/services/addressService';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function Profile() {
    const [user, setUser] = useState({});
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [cities, setCities] = useState([]);
    const [cityId, setCityId] = useState('');
    const [districts, setDistricts] = useState([]);
    const [districtId, setDistrictId] = useState('');
    const [wards, setWards] = useState([]);
    const [wardId, setWardId] = useState('');

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const user = await getLoggedUser();
            setUser(user);
            setFullname(user.name);
            setEmail(user.email);
            setPhone(user.phone);
            setStreet(user.street);
            setCityId(user.cityId);
            setDistrictId(user.districtId);
            setWardId(user.wardId);
        };
        fetchCurrentUser();
    }, []);

    //Get All Cities
    useEffect(() => {
        const fetchAllCities = async () => {
            const cities = await getAllCities();
            setCities(cities);
        };
        fetchAllCities();
    }, []);

    //Get District By City Id
    useEffect(() => {
        const fetchDistrictByCityId = async () => {
            const districts = await getDistrictByCity(cityId);
            setDistricts(districts);
        };
        fetchDistrictByCityId();
    }, [cityId]);

    //Get Ward By District Id
    useEffect(() => {
        const fetchWardByDistrictId = async () => {
            const wards = await getWardByDistrict(districtId);
            setWards(wards);
        };
        fetchWardByDistrictId();
    }, [districtId]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await updateProfile({
                id: user.id,
                name: fullname,
                email: email,
                phone: phone,
                street: street,
                cityId: cityId,
                districtId: districtId,
                wardId: wardId,
            });
            console.log(response);
            toast.success('Update your profile successfully!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            // setUser(await getLoggedUser());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <form id={cx('info-form')} onSubmit={handleUpdateProfile}>
                <div className={cx('input-group')}>
                    <label htmlFor="fullname" className={cx('input-label')}>
                        Full name
                    </label>
                    <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        className={cx('input-text')}
                        value={fullname}
                        readOnly
                    />
                </div>
                <div className={cx('input-group')}>
                    <label htmlFor="email" className={cx('input-label')}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className={cx('input-text')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={cx('input-group')}>
                    <label htmlFor="phone" className={cx('input-label')}>
                        Phone
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        className={cx('input-text')}
                        value={phone}
                        onChage={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={cx('input-group')}>
                    <label htmlFor="address" className={cx('input-label')}>
                        Address
                    </label>
                    <div className={cx('address-info')}>
                        <div className={cx('street')}>
                            <label htmlFor="street" className={cx('street-label')}>
                                Street
                            </label>
                            <input
                                type="text"
                                name="street"
                                id="street"
                                className={cx('street-txt')}
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                        </div>
                        <div className={cx('city')}>
                            <label htmlFor="city" className={cx('city-label')}>
                                City
                            </label>
                            <select
                                name="city"
                                id="city"
                                className={cx('city-txt')}
                                defaultValue="DEFAULT"
                                value={cityId}
                                onChange={(e) => setCityId(e.target.value)}
                            >
                                <option value="DEFAULT" disabled hidden>
                                    -- Select a city --
                                </option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={cx('district')}>
                            <label htmlFor="district" className={cx('district-label')}>
                                District
                            </label>
                            <select
                                name="district"
                                id="district"
                                className={cx('district-txt')}
                                defaultValue="DEFAULT"
                                value={districtId}
                                onChange={(e) => setDistrictId(e.target.value)}
                            >
                                <option value="DEFAULT" disabled hidden>
                                    --Select a district--
                                </option>
                                {districts.map((district) => (
                                    <option key={district.id} value={district.id}>
                                        {district.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={cx('ward')}>
                            <label htmlFor="ward" className={cx('ward-label')}>
                                Ward
                            </label>
                            <select
                                name="ward"
                                id="ward"
                                className={cx('ward-txt')}
                                defaultValue="DEFAULT"
                                value={wardId}
                                onChange={(e) => setWardId(e.target.value)}
                            >
                                <option value="DEFAULT" disabled hidden>
                                    --Select a ward--
                                </option>
                                {wards.map((ward) => (
                                    <option key={ward.id} value={ward.id}>
                                        {ward.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <Button primary className={cx('update-btn')}>
                    update
                </Button>
            </form>
        </div>
    );
}

export default Profile;
