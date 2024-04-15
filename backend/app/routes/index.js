import routes from "./LogInRoutes.js";
import donationRoutes from "./donation-routes.js";
import campRoutes from "./camp-routes.js";

//Initilize the routes
export const initializeRouter = (app)=>{
    app.use('/refugee',routes);
    app.use('/donation',donationRoutes);
    app.use('/camp',campRoutes)
}
