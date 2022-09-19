import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email: {
        require: true,
        unique: true,
        type: String
    },
    password: {
        type: String,
    }
}, {
    timestamps: true
})

export default mongoose.model("User", UserSchema)