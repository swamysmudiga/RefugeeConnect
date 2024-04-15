
import RefugeeRouter  from "./refugeeRoutes.js";
import ResourceRouter  from "./ResourceRoutes.js";
import LogInroutes from "./LogInRoutes.js"

//Initilize the routes
export const initializeRouter = (app)=>{
    app.use('/refugee/login',LogInroutes);
    app.use('/refugee',RefugeeRouter);
    app.use('/resource',ResourceRouter);
}