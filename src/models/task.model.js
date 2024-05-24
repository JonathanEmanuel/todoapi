import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed:{
        type:Boolean,
        default: false
    },
    createdAd: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
})

const Task = mongoose.model('Task', TaskSchema);

export default Task;