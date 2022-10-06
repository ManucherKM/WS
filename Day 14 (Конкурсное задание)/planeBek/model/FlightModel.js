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
    },
    massPlace: {
        type: Array,
        default: [],
        required: true
    },
    description: {
        type: String,
        default: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi architecto similique ipsam accusamus neque voluptatum vitae unde eos excepturi, dolorem, nulla blanditiis mollitia totam provident sunt aliquid eius amet dolorum?"
    }
}, {
    timestamps: true
});

export default mongoose.model("Flight", FlightModel)