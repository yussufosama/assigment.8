import mongoose from "mongoose";



const noteSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,

        validate: {
            validator: function (value) {

                return value !== value.toUpperCase()

            },

            message: "title cannot be entirely uppercase"
        }
    },

    content: {
        type: String,
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

},
{
    timestamps: true
})



//7awal tf7mmmm
export const noteModel = mongoose.model("Note", noteSchema)