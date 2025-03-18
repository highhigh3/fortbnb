import { useEffect } from 'react';
// import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { link, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getAllSpotsThunk } from '../../store/spots';
import { useSelector } from 'react-redux';
import "./LandingPage.css";


// const LandingPage = () => {
//     const dispatch = useDispatch();
//     const [spots, setSpots] = useState([]);
//     const [isLoaded, setIsLoaded] = useState(false);

function LandingPage() {
    const dispatch = useDispatch();
    const spots = useSelector((state) => state.spots.Spots);
    // const spots = useSelector((state) => Object.values(state.spots.Spots));

    // useEffect(() => {
    //     const getData = async () => {
    //         dispatch(getAllSpotsThunk())
    //         setIsLoaded(true);
    //     }

    //     if (!isLoaded) {
    //         getData();
    //     }

    // }, [spots, isLoaded])

    useEffect(() => {
        dispatch(getAllSpotsThunk());
    }, [dispatch]);

    // if (!isLoaded) && !allSpots.length) {
    //     return <h1>Loading...<h1/>
    // } else{}

    return (
        <div>
            <h1>Fortbnb</h1>
            {spots.map(spot => (
                <Link to={`/spots/${spot.id}`} key={spot.id}>
                    <div>
                        <img src={spot.previewImage} />
                    </div>
                    <div>
                        <h2>{spot.city}, {spot.state}</h2>
                        <h3>${spot.price}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default LandingPage;

// {
//     ownerId: 1,
//     address: "123 spongebob way",
//     city: "bikini bottom",
//     state: "hawaii",
//     country: "usa",
//     lat: 37.76453,
//     lng: -122.47303,
//     name: "Pineapple",
//     description: "pineapple under the sea",
//     price: 55.00
//   },