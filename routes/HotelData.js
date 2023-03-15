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
            Suite: req.body.suite,
            Superior_Room: req.body.superiorRoom,
            Duplex_Suite: req.body.duplexSuite,
            Studio_Room: req.body.studioRoom,
            Studio_Suite: req.body.studioSuite,
            Garden_Room: req.body.gardenRoom,
            Garden_Twin_Room: req.body.gardenTwinRoom,
            Executive_Lake_View_Room: req.body.executiveLakeViewRoom,
            Presidential_Suite: req.body.presidentialSuite,
            Terrace_Studio: req.body.terraceStudio,
            Garden_Suite: req.body.gardenSuite,
            Mandala_Suites: req.body.mandalaSuites,
            Premier_Suite: req.body.premierSuite,
            Hollywood_Room: req.body.hollywoodRoom,
            Deluxe_Suite: req.body.deluxSuite,
            Premier_Cottages: req.body.premierCottages,
            Standard_Suite: req.body.standardSuite,
            Executive_Balcony_Room: req.body.executiveBalcony,
            Accessible_Room: req.body.accessibleRoom,
            Heritage_Room: req.body.heritageRoom,
            Heritage_Studio: req.body.heritageStudio,
            Heritage_Suite: req.body.heritageSuite,
            Bay_Room: req.body.bayRoom,
            Single_Suite : req.body.singleSuite,
            Differential_Abled_Suite: req.body.das,
            Premium_Room: req.body.premiumRoom,
            Premium_Studio: req.body.premiumStudio,
            Family_Studio_Suite: req.body.familyStudioSuite,
            Deluxe_Vista: req.body.deluxeVista,
            Premium_Rooms_with_Private_Terrace: req.body.prwpt,
            Premium_Vista_Rooms_with_Private_Terrace: req.body.pvrwpt,
            Aurika_Suite: req.body.aurikaSuite
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
