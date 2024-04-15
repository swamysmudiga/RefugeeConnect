import express from "express";
import { logIn , getUserLogIn } from '../controllers/login-controller.js'



const LogInroutes = express.Router();

LogInroutes.route('/:id').get(getUserLogIn);
LogInroutes.route('').post(logIn);


export default LogInroutes;