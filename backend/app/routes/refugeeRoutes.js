import express from 'express';
import * as refugeeController from './../controllers/refugee-controller.js';

const ResfugeeRouter = express.Router();

ResfugeeRouter.route('/register')
    .post(refugeeController.refugeeRegister)

ResfugeeRouter.route('/')
    .get(refugeeController.getAllRefugee)

ResfugeeRouter.route('/:id')
    .get(refugeeController.getOneRefugee)
    .patch(refugeeController.updateRefugeeById)
    .delete(refugeeController.removeRefugeeById);

export default ResfugeeRouter;