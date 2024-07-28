import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
        }
    },
    {
        timestamps: true,
    }
)

const signUp = mongoose.model("signUp", signUpSchema);
export default signUp;