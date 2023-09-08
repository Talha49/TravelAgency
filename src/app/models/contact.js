import mongoose, {Schema} from "mongoose";

const contactSchema = new Schema ({

    firstName : {
        type: String,
        required: [true, "Fist Name is Required."],
        trim: true,
        minLength: [1, "Name must be larger than 1 character"],
        maxLength: [30, "Name must be lesser than 30 characters"],

    },
    lastName : {
        type: String,
        required: [true, "Last Name is Required."],
        trim: true,
        minLength: [1, "Name must be larger than 1 character"],
        maxLength: [30, "Name must be lesser than 30 characters"],

    },
    email : {
        type: String,
        required: [true, "Email is Required."],
        match: [/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i, "Invalid Email Adress"],
    },

    message: {
   type: String,
   required: [true, "Message is Required. "],
    },

    date: {
        type: Date,
        default: Date.now,

    },

});


const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default Contact;