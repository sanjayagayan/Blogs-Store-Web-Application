import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('MongoDB Error!');
    }
};


export default connectDB;