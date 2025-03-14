// ------- Imports -------
// import { csrfFetch } from './csrf';


// ------- Action Types -------
const GET_ALL_SPOTS = "spots/getAllSpots";


// ------- Action Creators -------
const getAllSpots = (spots) => {
    return {
      type: GET_ALL_SPOTS,
      payload: spots
    }
  };


// ------- Thunks -------
export const getAllSpotsThunk = () => async (dispatch) => {
    try {
        const res = await fetch("/api/spots");
        if(res.ok) {
            const data = await res.json();
            dispatch(getAllSpots(data));
        } else {
            throw res;
        }
    } catch (error) {
        return error;
    }
};


// ------- Reducer -------
let initialState = {
    byId: {},
    allSpots: []
};

function spotsReducer (state = initialState, action) {
    let newState = {};

    switch (action.type) {
        case "GET_ALL_SPOTS":
            newState = { ...state };

            newState.allSpots = action.payload;

            for (let spot of action.payload) {
                newState.byId[spot.id] = spot;
            }
            
            return newState;
        default:
            return state;
    }
}

export default spotsReducer;