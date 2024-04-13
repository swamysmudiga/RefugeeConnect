import express from "express";
import { logIn , getUserLogIn } from '../controllers/login-controller.js'



const routes = express.Router();

routes.route('/login/:id').get(getUserLogIn);
routes.route('/login').post(logIn);


export default routes;