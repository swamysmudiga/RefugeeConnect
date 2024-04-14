import routes from "./LogInRoutes.js";
import router from "./refugeeRoutes.js";

//Initilize the routes
export const initializeRouter = (app)=>{
    app.use('/refugee',router);
}