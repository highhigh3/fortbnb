// ------- Imports -------
import { csrfFetch } from './csrf';


// ------- Action Types -------
const GET_ALL_SPOTS = "spots/getAllSpots";


// ------- Action Creators -------
const getAllSpotsAction = (data) => {
    return {
        type: GET_ALL_SPOTS,
        payload: data
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


// ------- Normalizing State -------
const initialState = {
    allSpots: [],
    byId: {}
};

// ------- Reducer -------
const spotsReducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
        case GET_ALL_SPOTS: 
            const spotsArr = action.payload.Spots;
            newState = {...state}
            newState.allSpots = spotsArr;
            let newByIdGetAllSpots = {};
            for(let spot of spotsArr){
                newByIdGetAllSpots[spot.id] = spot
            }
            newState.byId = newByIdGetAllSpots;

            return newState;
        default:
            return state;
    }
}

export default spotsReducer;