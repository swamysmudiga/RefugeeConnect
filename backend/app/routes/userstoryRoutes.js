import express from 'express';
import * as userstoryController from '../controllers/userstory-controller.js';

const userstoryRouter = express.Router();

userstoryRouter.route('/')
    .get(userstoryController.search)

userstoryRouter.route('/register')
    .post(userstoryController.post)

userstoryRouter.route('/:id')
    .get(userstoryController.get)
    .delete(userstoryController.deleteUserstory)
    .put(userstoryController.updateUserstory);

export default userstoryRouter;