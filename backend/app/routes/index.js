
import RefugeeRouter  from "./refugeeRoutes.js";
import ResourceRouter  from "./ResourceRoutes.js";
import LogInroutes from "./LogInRoutes.js"
import instructorRoutes from "./instructorRoutes.js";

//Initilize the routes
export const initializeRouter = (app)=>{
    app.use('/refugee/login',LogInroutes);
    app.use('/refugee',RefugeeRouter);
    app.use('/resource',ResourceRouter);
    app.use('/instructor',instructorRoutes);
}
