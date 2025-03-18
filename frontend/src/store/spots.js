// ------- Imports -------
import { csrfFetch } from './csrf';


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
        const res = await csrfFetch("/api/spots");
        if (res.ok) {
            const data = await res.json();
            dispatch(getAllSpots(data.Spots));
            throw res;
        }
    } catch (error) {
        return error;
    }
};


// ------- Reducer -------
const initialState = { Spots: [] };

const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SPOTS:
            return { ...state, Spots: action.payload };
        default:
            return state;
    }
};

export default spotReducer;

// let initialState = {
//     byId: {},
//     allSpots: []
// };


// function spotsReducer (state = initialState, action) {
//     let newState = {};

//     switch (action.type) {
//         case "GET_ALL_SPOTS":
//             newState = { ...state, allSpots: action.payload };

//             newState.allSpots = action.payload;
//             console.log(action.payload);

//             for (let spot of action.payload) {
//                 newState.byId[spot.id] = spot;
//             }
//         //create a new object in memory and spread state

//             return newState;
//         default:
//             return state;
//     }
// }

// export default spotsReducer;