
import RefugeeRouter  from "./refugeeRoutes.js";
import ResourceRouter  from "./ResourceRoutes.js";

//Initilize the routes
export const initializeRouter = (app)=>{
    app.use('/refugee',RefugeeRouter);
    app.use('/resource',ResourceRouter);
}