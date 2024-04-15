import express from 'express';
import * as resourceController from '../controllers/resource-controller.js';

const ResourceRouter = express.Router();

ResourceRouter.route('/')
    .get(resourceController.search)

ResourceRouter.route('/register')
    .post(resourceController.post)

ResourceRouter.route('/:id')
    .get(resourceController.get)
    .delete(resourceController.deleteResource)
    .put(resourceController.updateResource);

export default ResourceRouter;