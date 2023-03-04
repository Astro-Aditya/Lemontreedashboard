const express = require('express'); 

const Hotel = require('../models/HotelData');
const router = express.Router()


router.get('/', async(req, res) => {
    try {
        let cities = await Hotel.find({}).select('City').distinct('City')
        res.json({
            success: true,
            cities
        })
    } catch (err) {
        return res.status(500).json({success:false, msg: err.message})
    }
})

router.post('/hotels', async(req,res) => {
    try {
        let hotelData = await Hotel.find({City:req.body.city}).select('Hotel').distinct('Hotel')
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
