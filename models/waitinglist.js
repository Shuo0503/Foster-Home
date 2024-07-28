import mongoose from "mongoose";

const waitinglistSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        }
    },
    {
        timestamps: true,
    }
)

const waitinglist = mongoose.model("Waitlist", waitinglistSchema);
export default waitinglist;