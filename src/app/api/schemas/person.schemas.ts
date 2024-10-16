import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.models.Person || mongoose.model('Person', schema)