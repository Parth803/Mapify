const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
    locationName: {
        type: String,
        require: true,
        min: 3,
        max: 40
    },
    location: {
        type: Object,
        properties: {
          type: {
            type: String,
            enum: 'Point',
            default: 'Point'
          },
          coordinates: {
            type: [Number],
            default: [0, 0]
          }
        }
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    description: {
        type: String,
        require: false,
        min: 0,
        max: 200
    }
}, {timestamps:true});

module.exports = mongoose.model("Pin", PinSchema); 