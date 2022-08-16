import mongoose from 'mongoose';

const contactusSchema = mongoose.Schema({
    name: { type: String, required:  true },
    email: { type: String, required:  true },
    message: { type: String },
    status:{type:String},
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

var ContactUs = mongoose.model('ContactUs', contactusSchema);

export default ContactUs;