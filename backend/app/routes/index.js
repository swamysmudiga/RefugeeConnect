import routes from "./LogInRoutes.js";

//Initilize the routes
export const initializeRouter = (app)=>{
    app.use('/refugee',routes);
}