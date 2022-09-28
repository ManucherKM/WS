import mongoose from "mongoose";


const FlightModel = mongoose.Schema({
    nameTrip: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    dauration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    where: {
        type: String,
        required: true
    },
    why: {
        type: String,
        required: true
    },
    flightNumber: {
        type: String,
        required: true
    },
    urlImg: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("Flight", FlightModel)