import { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllSpotsThunk } from "../../store/spots";
import "./LandingPage.css";
import SpotCard from './LandingPageCard'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const spots = useSelector((state) => state.spots.allSpots);
    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {

        const getSpots = async () => {

            await dispatch(getAllSpotsThunk());
            setisLoaded(true);
        }


        if (!isLoaded) {
            getSpots();
        }

    }, [isLoaded])


    const goToSpotDetail = (e, spot) => {
        e.preventDefault();
        navigate(`/spot/${spot.id}`)

    }
    if (!isLoaded) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div>
                <h1>Welcome to Fortbnb</h1>
                <div className="card-list-container">
                {
                    spots.map((spot, idx) => (
                        <div 
                            className="card-container" 
                            key={`${idx}-${spot.id}`}
                            onClick={(e)=> goToSpotDetail(e, spot)}
                            >
                            <SpotCard spot={spot} />
                        </div>
                    ))
                }
                </div>
            </div>
        );
    }
}
export default LandingPage;