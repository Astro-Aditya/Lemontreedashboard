const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hoteldataSchema = new Schema({
    City: {type: String},
    Hotel: {type:String},
    Address: {type:String},
    Proximity: {type:String},
    Cancellation_Policy: {type: String},
    Car_Rentals: {type:String},
    Extra_Meal_Bed_Charges: {type:String},
    ECI_LCO: {type:String},
    Standard_Room: {type:String},
    Deluxe_Room: {type:String},
    Executive_Room: {type:String},
    Premier_Room: {type:String},
    Executive_Suite: {type:String},
    Specially_Abled_Room: {type:String},
    Jr_Suite: {type:String},
    Suite: {type:String}
},{
    timestamps:true
});

module.exports = Hoteldata = mongoose.model('Hoteldata', hoteldataSchema);
