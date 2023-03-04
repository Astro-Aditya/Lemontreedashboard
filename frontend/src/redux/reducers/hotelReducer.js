import { GET_CITIES, GET_DATA, GET_HOTELS } from '../actions/constants'

const initialState = {
    cities: null,
    hotels: null,
    fullData: null
}

export default function(state=initialState, action){
    const {type, payload} = action
    switch(type){
        case GET_CITIES:
            state = {...state, cities:payload}
            return state 
        case GET_HOTELS:
            state = {...state, hotels:payload}
            return state 
        case GET_DATA:
            state = {...state, fullData:payload}
            return state 
        default:
            return state
    }
}