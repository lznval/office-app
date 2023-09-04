import {data} from "../../data";
import {CHANGE_STATUS, GET_PLACES} from "../actions/types";

const defaultState = {
    places: data.places
};
export const placeReducer = (state= defaultState, action) => {
    switch (action.type) {
        case GET_PLACES:
            return {...state}
        case CHANGE_STATUS:
            const updatePlaces = state.places.map(place => {
                if (place.id === action.payload.id) {
                    return {
                        ...place,
                        status: action.payload.status
                    };
                }
                return place
            })
            return {...state, places: updatePlaces}
        default:
            return state
    }
}
