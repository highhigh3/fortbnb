import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { link, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getAllSpotsThunk } from '../../store/spots';
import "./LandingPage.css";

const LandingPage = () => {
    const dispatch = useDispatch();
    const [spots, setSpots] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getData = async() => {
            dispatch(getAllSpotsThunk())
            setIsLoaded(true);
        }

        if(!isLoaded){
            getData();
        }

    }, [spots, isLoaded])

    // console.log(spots)

    // return (
    //     <div style={{ position: 'relative', top: '2ren' }}>
    //         <h1>Welcome to Spots</h1>
    //         <div style={{ border: '1px black solid', padding: '20px' }}>
    //             <input
    //                 type="text"
    //                 placeholder='New Spot'
    //                 value=""
    //             />
    //             <button style={{
    //                 backgroundColor: "rgb(29,155,240)",
    //                 color: 'white',
    //                 cursor: 'pointer'
    //             }}
    //             >Submit Spot</button>
    //             </div>
    //         <div className='spots-container'>
    //             {spots?.map((spot, idx) => (
    //         <div key={`${idx}-${spots.id}`}>
    //             <Link to={`/spots/${spots.id}`}>{spot.spot}</Link>
    //             </div>
    //             ))}
    //     </div>
    //     </div>
    // );
}

export default LandingPage;


// setSpots(      {
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
//   {
//     ownerId: 1,
//     address: "555 vscode st",
//     city: "bikini top",
//     state: "alaska",
//     country: "usa",
//     lat: 35.76463,
//     lng: -120.77303,
//     name: "code editor",
//     description: "Best place to code",
//     price: 90.00
//   },
//   {
//     ownerId: 2,
//     address: "group 3 apt 1",
//     city: "New York City",
//     state: "New York",
//     country: "usa",
//     lat: 31.76463,
//     lng: -128.77303,
//     name: "A cool group",
//     description: "A place where people have fun",
//     price: 69.00
//   }, {
//     ownerId: 3,
//     address: "group 1 apt 3",
//     city: "Buffalo",
//     state: "New York",
//     country: "usa",
//     lat: 35.76463,
//     lng: -120.77303,
//     name: "A cold group",
//     description: "Come here if you want to enjoy snow",
//     price: 56.00
//   }, {
//     ownerId: 3,
//     address: "group 8 apt 5",
//     city: "Concrete Jungle",
//     state: "New York",
//     country: "usa",
//     lat: 35.22463,
//     lng: -127.33303,
//     name: "Santa's hood",
//     description: "Heaven is a place on Earth",
//     price: 40.00
//   })