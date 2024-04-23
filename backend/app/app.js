import { initializeRouter } from "./routes/index.js";
import  express  from "express";
import  cors from "cors";
import mongoose from "mongoose";



export const initialise = (app) => {
    // Using cors
    app.use(cors());
    // Parsing request bodies
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // Connection with mongoose
    mongoose.connect(process.env.MONGO_CONNECTION);
    // Initializing the routes
    initializeRouter(app);
}