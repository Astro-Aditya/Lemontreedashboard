import axios from 'axios'
import { GET_CITIES, GET_HOTELS, GET_DATA } from './constants'


export const getCities = () => async (dispatch) => {
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
        }
    }

    try{
        const res = await axios.get('http://localhost:5000/hotel',config)
        // const res = await axios.get(`/farmer`,body, config)
        
        dispatch({
            type: GET_CITIES,
            payload: res.data.cities
        })

    } catch(err){
        const errors = err.response.data.errors
        if(errors){
            console.log(errors)
            // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
    }
}

export const getHotels = (objbody) => async (dispatch) => {
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(objbody)

    try{
        const res = await axios.post('http://localhost:5000/hotel/hotels',body, config)
        // const res = await axios.post(`/hotel/hotels`,body, config)
        
        dispatch({
            type: GET_HOTELS,
            payload: res.data.hotelData
        })

    } catch(err){
        const errors = err.response.data.errors
        if(errors){
            console.log(errors)
            // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
    }
}

export const getFullData = (objbody) => async (dispatch) => {
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(objbody)

    try{
        const res = await axios.post('http://localhost:5000/hotel/data',body, config)
        // const res = await axios.post(`/hotel/hotels`,body, config)
        
        dispatch({
            type: GET_DATA,
            payload: res.data.completeData
        })

    } catch(err){
        const errors = err.response.data.errors
        if(errors){
            console.log(errors)
            // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
    }
}