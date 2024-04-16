
import RefugeeRouter  from "./refugeeRoutes.js";
import ResourceRouter  from "./ResourceRoutes.js";
import LogInroutes from "./LogInRoutes.js"
import instructorRoutes from "./instructorRoutes.js";
import donationRoutes from "./donation-routes.js";
import campRoutes from "./camp-routes.js";
import userstoryRoutes from "./userstoryRoutes.js"

//Initilize the routes
export const initializeRouter = (app)=>{
    app.use('/refugee/login',LogInroutes);
    app.use('/refugee',RefugeeRouter);
    app.use('/resource',ResourceRouter);
    app.use('/instructor',instructorRoutes);
    app.use('/donation',donationRoutes);
    app.use('/camp',campRoutes);
    app.use('/userstory',userstoryRoutes)
}
