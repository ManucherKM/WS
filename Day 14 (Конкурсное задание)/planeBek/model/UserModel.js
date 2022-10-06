import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true
    },
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    passwordHash: String,
    logoImg: {
        type: String,
        default: "https://s16.stc.all.kpcdn.net/russia/wp-content/uploads/2019/01/Altai-.jpg"
    },
    flying: {
        type: Array,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model("User", UserSchema)