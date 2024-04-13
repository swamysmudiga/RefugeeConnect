import routes from "./LogInRoutes.js";
import router from './ResourceRoutes.js';

//Initilize the routes
export const initializeRouter = (app)=>{
    app.use('/refugee',routes);
    app.use('/resources', router);
}