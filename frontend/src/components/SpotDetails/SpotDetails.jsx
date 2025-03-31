// import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { spotDetailsThunk } from "../../store/spots";
import './SpotDetails.css'


const SpotDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const spot = useSelector((state) => state.spots.byId[id]);
    // console.log(spot, "looking for imageurl ---->")
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        const getSpotDetails = async () => {
            await dispatch(spotDetailsThunk(id));
            setIsLoaded(true);
        }

        if (!isLoaded) {
            getSpotDetails();
        }

    }, [isLoaded, dispatch, id]) //eslint error need to add dispatch and id

    if (!isLoaded) {
        return <h1>LOADING...</h1>;
    }

    if (!spot) {
        return <h1>SPOT DOES NOT EXIST!!!</h1>;
    }

    // console.log(spot.SpotImages, "image debug ------>");
    return (
        <div>
            <h1>{spot.name}</h1>
            <ul>
                <h2>{spot.city}, {spot.state}, {spot.country}</h2>
                <div>
                    <div className="images">
                    <li>
                        <img
                            className='mainImage'
                            src={spot.SpotImages[0].url}
                        />
                    </li>
                    <div className='spot-images'>
                        <img
                            className='spotimage-top-left'
                            src={spot.SpotImages[1].url}
                        />
                        <img
                            className='spotimage-top-right'
                            src={spot.SpotImages[2].url}
                        />
                        <img
                            className='spotimage-bottom-left'
                            src={spot.SpotImages[3].url}
                        />
                        <img
                            className='spotimage-bottom-right'
                            src={spot.SpotImages[4].url}
                        />
                        </div>
                    </div>
                </div>
                <h2>Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</h2>
                <p>{spot.description}</p>
                <div>
                    <h3>{spot.price} / night</h3>
                </div>
            </ul>
        </div>
    );
}

export default SpotDetails;