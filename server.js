const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose') 
const register = require('./routes/Register')
const login = require('./routes/Login')
const hotel = require('./routes/HotelData')

const connectDB = require('./config/db')

const dotenv = require('dotenv');

const path = require('path')
const HotelData = require('./models/HotelData')
const { insertionData } = require('./data/sampledata')



dotenv.config()

const app = express()

//Connect DB
connectDB()


const PORT = process.env.PORT || 5000;

// app.use(express.static(pathh))

app.use(cors())
app.use(express.json({limit: '50mb'}))

//--------------------------Deployement-----------------------------------
const __dirname1 = path.resolve()

let http
let io

// Socket
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname1, 'frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
    })
    http = require('http').createServer(app)

} else {
    http = require('http').createServer(app)
}


app.use(function(req, res, next){
    req.io = io;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


// Disposition.insertMany(Dispostion)
// CallDetails.insertMany(callD)
// Apr.insertMany(APR)
// CallRegister.insertMany(callreg)
// Ivr.insertMany(ivrs)
// IntervalWiseCallDetail.insertMany(iwcd)
// IntervalWiseLoginDetail.insertMany(LoginData)
// APREzmall.insertMany(newAPR)
HotelData.insertMany(insertionData)

app.use('/register', register)
app.use('/login', login)
app.use('/hotel', hotel)


http.listen(process.env.PORT || PORT, () => console.log(`Server running on port ${PORT}`))
