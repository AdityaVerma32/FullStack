import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to database!!")
    } catch (error) {
        console.log("Error while connecting MongoDB : " + error)
        process.exit
    }
}

export default connectDB