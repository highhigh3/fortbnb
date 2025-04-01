// ------- Imports -------
import { csrfFetch } from './csrf';


// ------- Action Types -------
const GET_ALL_SPOTS = "spots/getAllSpots";
const SPOT_DETAILS = "spots/spotDetails";
const CREATE_SPOT = "spots/createSpot";


// ------- Action Creators -------
const getAllSpotsAction = (data) => {
    return {
        type: GET_ALL_SPOTS,
        payload: data
    }
};

const spotDetailsAction = (spot) => {
    return {
        type: SPOT_DETAILS,
        payload: spot
    }
};

const createSpotAction = (spot) => {
    return {
        type: CREATE_SPOT,
        payload: spot
    }
};


// ------- Thunks -------
export const getAllSpotsThunk = () => async (dispatch) => {
    try {
        const res = await csrfFetch("/api/spots/");
        if (res.ok) {
            const data = await res.json();
            dispatch(getAllSpotsAction(data));
            throw res;
        }
    } catch (error) {
        return error;
    }
};

export const spotDetailsThunk = (spotId) => async (dispatch) => {
    try {
        const res = await csrfFetch(`/api/spots/${spotId}`);
        if (res.ok) {
            const data = await res.json();
            // console.log(data, "spotDetails Thunk ----->")
            dispatch(spotDetailsAction(data));
            throw res;
        }
    } catch (error) {
        return error;   
    }
};

export const createSpotThunk = (spotData) => async (dispatch) => {
    try {
        // console.log("HELLO CHECKING SPOTDATA", spotData)
        const {country, address, city, state, lat, lng, description, name, price, previewImage, image1, image2, image3, image4 } = spotData;
        // console.log(latitude, longitude, "CREATSPOT TESTING THUNK ----->")
        const res = await csrfFetch("/api/spots/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
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
            })
        });
        // console.log(res, "BOOM BOOM --->")
        if (res.ok) {
            const data = await res.json();
            // console.log(data, "HELLLOOOOOOOO ------>")
            dispatch(createSpotAction(data));
            return data;
            // throw res;
        }
    } catch (error) {
        return error;
    }
};


// ------- Normalizing State -------
const initialState = {
    allSpots: [],
    byId: {}
};

// ------- Reducer -------
const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_SPOTS: {
            const spotsArr = action.payload.Spots;
            newState = { ...state }
            newState.allSpots = spotsArr;
            let newByIdGetAllSpots = {};
            for (let spot of spotsArr) {
                newByIdGetAllSpots[spot.id] = spot
            }
            newState.byId = newByIdGetAllSpots;
            return newState;
        }

        case SPOT_DETAILS: {
            const spotDetails = action.payload;
            // console.log(spotDetails, "here --->") above not an array
            newState = { ...state };
            newState.allSpots = [...state.allSpots];
            let newByIdSpotDetails = {};
            for (let spot of [spotDetails]) {
                newByIdSpotDetails[spot.id] = spot
            }
            newState.byId = newByIdSpotDetails;
            // console.log(newState.byId, "reducerhere ----> xD")
            return newState;
        }

        case CREATE_SPOT: {
            // console.log(action.payload, "HI BYE HI BYE ---->")
            const createSpot = action.payload;
            newState= { ...state };
            // console.log(newState, "NEWSTATE ARE YOU THERE ----->")
            newState.allSpots = [...newState.allSpots, createSpot];
            // console.log(newState.allSpots, "IS IT BEING STORED IN MY ALL SPOTS---->")
            newState.byId = { ...newState.byId, [createSpot.id]: createSpot };
            // console.log([createSpot.id], "check this ---->")
            // console.log(newState, "HIIIII NEW STATE --->")
            // console.log(createSpot, "LOL SMILEY FACE ----->")
            return newState; 
        }


        default:
            return state;
    }
};

export default spotsReducer;