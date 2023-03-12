const express = require('express'); 

const Hotel = require('../models/HotelData');
const router = express.Router()


router.post('/', async(req, res) => {
    try {
        let cities = await Hotel.find({}).select('City').collation({ locale: 'en', strength: 2 }).distinct('City')
        res.json({
            success: true,
            cities
        })
    } catch (err) {
        return res.status(500).json({success:false, msg: err.message})
    }
})

router.post('/postData', async(req, res) => {
    try {
        const newHotelData = await Hotel.create({
            City: req.body.city,
            Hotel: req.body.hotel,
            Address: req.body.address,
            Proximity: req.body.proximity,
            Cancellation_Policy: req.body.cancellationPolicy,
            Car_Rentals: req.body.carRentals,
            Extra_Meal_Bed_Charges: req.body.extraMeal,
            ECI_LCO: req.body.eci,
            Standard_Room: req.body.standardRoom,
            Deluxe_Room: req.body.deluxRooms,
            Executive_Room: req.body.executiveRoom,
            Premier_Room: req.body.premierRoom,
            Executive_Suite: req.body.executiveSuite,
            Specially_Abled_Room: req.body.spAR,
            Jr_Suite: req.body.jrSuite,
            Suite: req.body.suite
        })
        res.status(201).json({
            success: true,
            data:newHotelData
        })
    } catch (err) {
        return res.status(500).json({success:false, msg: err.message})
    }
})

router.post('/hotels', async(req,res) => {
    try {
        let hotelData = await Hotel.find({
            City: { $regex: new RegExp(req.body.city, "i") }
          }).select('Hotel').distinct('Hotel')
        res.json({
            success: true,
            hotelData
        })
    } catch (err) {
        return res.status(500).json({success:false, msg: err.message})
    }
})

router.post('/data', async(req,res) => {
    try {
        let completeData = await Hotel.find({Hotel:req.body.hotel}).select(['-_id', '-__v'])
        res.json({
            success: true,
            completeData
        })
    } catch (err) {
        return res.status(500).json({success:false, msg: err.message})
    }
})

module.exports = router
