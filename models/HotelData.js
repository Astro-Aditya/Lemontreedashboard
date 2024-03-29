const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hoteldataSchema = new Schema({
    City: {type: String},
    Hotel: {type:String, default: 'NA'},
    Address: {type:String, default: 'NA'},
    Proximity: {type:String, default: 'NA'},
    Cancellation_Policy: {type: String},
    Car_Rentals: {type:String, default: 'NA'},
    Extra_Meal_Bed_Charges: {type:String, default: 'NA'},
    ECI_LCO: {type:String, default: 'NA'},
    Standard_Room: {type:String, default: 'NA'},
    Deluxe_Room: {type:String, default: 'NA'},
    Executive_Room: {type:String, default: 'NA'},
    Premier_Room: {type:String, default: 'NA'},
    Executive_Suite: {type:String, default: 'NA'},
    Specially_Abled_Room: {type:String, default: 'NA'},
    Jr_Suite: {type:String, default: 'NA'},
    Suite: {type:String, default: 'NA'},
    Superior_Room: {type:String, default: 'NA'},
    Duplex_Suite: {type:String, default: 'NA'},
    Studio_Room: {type:String, default: 'NA'},
    Studio_Suite: {type:String, default: 'NA'},
    Garden_Room: {type:String, default: 'NA'},
    Garden_Twin_Room: {type:String, default: 'NA'},
    Executive_Lake_View_Room: {type:String, default: 'NA'},
    Presidential_Suite: {type:String, default: 'NA'},
    Premier_Room: {type:String, default: 'NA'},
    Terrace_Studio: {type:String, default: 'NA'},
    Garden_Suite: {type:String, default: 'NA'},
    Mandala_Suites: {type:String, default: 'NA'},
    Premier_Suite: {type:String, default: 'NA'},
    Hollywood_Room: {type:String, default: 'NA'},
    Deluxe_Suite: {type:String, default: 'NA'},
    Premier_Cottages: {type:String, default: 'NA'},
    Standard_Suite: {type:String, default: 'NA'},
    Executive_Balcony_Room: {type:String, default: 'NA'},
    Accessible_Room: {type:String, default: 'NA'},
    Heritage_Room: {type:String, default: 'NA'},
    Heritage_Studio: {type:String, default: 'NA'},
    Heritage_Suite: {type:String, default: 'NA'},
    Bay_Room: {type:String, default: 'NA'},
    Single_Suite : {type:String, default: 'NA'},
    Differential_Abled_Suite: {type:String, default: 'NA'},
    Premium_Room: {type:String, default: 'NA'},
    Premium_Studio: {type:String, default: 'NA'},
    Family_Studio_Suite: {type:String, default: 'NA'},
    Deluxe_Vista: {type:String, default: 'NA'},
    Premium_Rooms_with_Private_Terrace: {type:String, default: 'NA'},
    Premium_Vista_Rooms_with_Private_Terrace: {type:String, default: 'NA'},
    Aurika_Suite: {type:String, default: 'NA'}
},{
    timestamps:true
});

module.exports = Hoteldata = mongoose.model('Hoteldata', hoteldataSchema);
