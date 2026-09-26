import mongoose, { Schema } from "mongoose";

const userSChema = new Schema({
    name: {
        type: String,
        required: true,
        max: 500,
        min:3
    },


    email: {
        type: String,
        required: true, unique: true

    },
    age: Number,
    phone: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true

    }

})

export const userModel = mongoose.model("user", userSChema)