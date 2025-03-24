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
            // console.log(data, "spotDetails Thunk ---->")
            dispatch(spotDetailsAction(data));
            throw res;
        }
    } catch (error) {
        return error;
    }
};

export const createSpotThunk = () => async (dispatch) => {
    try {
        // console.log("TESTING THUNK ----->")
        const res = await csrfFetch("/api/spots/", {
            method: "POST",
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
                previewImage
            })
        });
        if (res.ok) {
            const data = await res.json();
            dispatch(createSpotAction(data));
            throw res;
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
        case GET_ALL_SPOTS:
            const spotsArr = action.payload.Spots;
            newState = { ...state }
            newState.allSpots = spotsArr;
            let newByIdGetAllSpots = {};
            for (let spot of spotsArr) {
                newByIdGetAllSpots[spot.id] = spot
            }
            newState.byId = newByIdGetAllSpots;
            return newState;

        case SPOT_DETAILS:
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

        // case CREATE_SPOT:
        //     console.log("REDUCER FOR CREATE ------>")
        //     const createSpot = action.payload;
        //     newState = {...state}
            


        default:
            return state;
    }
};

export default spotsReducer;