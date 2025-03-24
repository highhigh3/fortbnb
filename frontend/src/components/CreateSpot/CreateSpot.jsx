import { useEffect, useState } from 'react';
// import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import "./CreateSpot.css"
import { createSpotThunk } from '../../store/spots';

const CreateSpot = () => {
    const [isLoaded, setisLoaded] = useState(false);
    const dispatch = useDispatch();

    // const [country, setCountry] = useState("");
    // const [streetAddress, setStreetAddress] = useState("");
    // const [city, setCity] = useState("");
    // const [state, setState] = useState("");
    // const [lat, setLat] = useState("");
    // const [lng, setLng] = useState("");
    // const [description, setDescription] = useState("");
    // const [name, setName] = useState("");
    // const [price, setPrice] = useState("");
    // const [previewImage, setPreviewImage] = useState("");
    // const [image1, setimage1] = useState("");
    // const [image2, setimage2] = useState("");
    // const [image3, setimage3] = useState("");
    // const [image4, setimage4] = useState("");

    const navigate = useNavigate();

    useEffect(() => {

        const postCreateSpot = async() => {
            await dispatch(createSpotThunk())
            setisLoaded(true);
        }
    }
)



    if (!isLoaded) {
        return <h1>Loading Create a Spot...</h1>
    }


    return (
        <div>
            <h1>CREATE A SPOT</h1>
        </div>
      );
    }

export default CreateSpot;
