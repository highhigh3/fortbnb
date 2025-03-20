// import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const SpotDetails = () => {

    const {id} = useParams();

    const spot = useSelector((state) => state.spots.byId[id]);


    return (
        <div>
            <h1>{spot.address}</h1>
        </div>
    )
}

export default SpotDetails;