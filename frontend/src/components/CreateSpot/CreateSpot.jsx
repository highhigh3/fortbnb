import { useState } from 'react';
// import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import "./CreateSpot.css"
import { createSpotThunk } from '../../store/spots';

const CreateSpot = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(country)

        const spotData = {
            country,
            address,
            city,
            state,
            lat,
            lng,
            description,
            name,
            price,
            previewImage,
            image1,
            image2,
            image3,
            image4
        };

        const createdNewSpot = await dispatch(createSpotThunk(spotData));
        navigate(`/spot/${createdNewSpot.id}`)

    }

    return (
        <div>
            <h1>CREATE A SPOT</h1>
            <h2>Wheres your place located?</h2>
            <p>Guests will only get your exact address once they booked a reservation.</p>

            <form onSubmit={handleSubmit}>
            <div>
                <label>Country
                <input 
                    type="text"
                    required
                    value={country}
                    placeholder="Country"
                    onChange={(e) => setCountry(e.target.value)} 
                />
                </label>
            </div>
            <div>
                <label>Address
                <input
                    type="text"
                    required
                    value={address} 
                    placeholder="Address" 
                    onChange={(e) => setAddress(e.target.value)} 
                />
                </label>
            </div>
            <div>
                <label>City
                <input
                    type="text"
                    required
                    value={city} 
                    placeholder="City" 
                    onChange={(e) => setCity(e.target.value)}
                />
                </label>
            </div>
            <div>
                <label>State
                <input
                    type="text"
                    required
                    value={state} 
                    placeholder="State" 
                    onChange={(e) => setState(e.target.value)}
                />
                </label>
            </div>
            <div>
                <label>Latitude
                <input 
                    type="text"
                    required
                    value={lat}
                    placeholder='Latitude' 
                    onChange={(e) => setLat(e.target.value)}
                />
                </label>
            </div>
            <div>
                <label>Longitude
                <input 
                    type="text"
                    required
                    value={lng}
                    placeholder="Longitude" 
                    onChange={(e) => setLng(e.target.value)}
                />
                </label>
            </div>
            <div>
                <h2>Describe your place to guests</h2>
                <p>Mention the best features of your space, any special amentities like fast wifi or parking, and what you love about the neighborhood.</p>
                <textarea 
                    type="text"
                    required
                    value={description}
                    placeholder="Please write at lease 30 characters" 
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <h2>Create a title for your spot</h2>
                <p>Catch guests attention with a spot title that highlights what makes your place special.</p>
                <input 
                    type="text"
                    required
                    value={name}
                    placeholder="Name of your spot"
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div>
                <h2>Set a base price for your spot</h2>
                <p>Competitve pricing can help your listing stand out and rank higher in search results.</p>
                <input 
                    type="text"
                    required
                    value={price}
                    placeholder="Price per night (USD)"
                    onChange={(e) => setPrice(e.target.value)} 
                />
            </div>
            <div>
                <h2>Liven up your spot with photos</h2>
                <p>Submit a link to at lease one photo to publish your spot.</p>
                <input 
                    type="text"
                    required
                    value={previewImage}
                    placeholder="Preview Image URL" 
                    onChange={(e) => setPreviewImage(e.target.value)}    
                />
            </div>
            <div>
                <input 
                    type="text"
                    required
                    value={image1}
                    placeholder="Image URL" 
                    onChange={(e) => setImage1(e.target.value)}    
                />
            </div>
            <div>
                <input 
                    type="text"
                    required
                    value={image2}
                    placeholder="Image URL" 
                    onChange={(e) => setImage2(e.target.value)}    
                />
            </div>
            <div>
                <input 
                    type="text"
                    required
                    value={image3}
                    placeholder="Image URL" 
                    onChange={(e) => setImage3(e.target.value)}    
                />
            </div>
            <div>
                <input 
                    type="text"
                    required
                    value={image4}
                    placeholder="Image URL" 
                    onChange={(e) => setImage4(e.target.value)}    
                />
            </div>

            <button type="submit">Create Spot</button>

        </form>
        </div>
      );
    };

export default CreateSpot;