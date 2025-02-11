import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from 'cors';
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try {
    mongoose.connect(URI);
    console.log("Connect to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}

app.use('/book', bookRoute);
app.use('/user', userRoute);

app.listen(PORT, ()=> {
    console.log(`Server is listening to port ${PORT}`);
});
