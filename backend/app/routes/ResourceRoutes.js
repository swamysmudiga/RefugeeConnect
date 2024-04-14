import express from 'express';
import * as resourceController from '../controllers/resource-controller.js';

const ResourceRouter = express.Router();

router.route('/')
    .get(resourceController.search)

router.route('/register')
    .post(resourceController.post)

router.route('/:id')
    .get(resourceController.get)
    .delete(resourceController.deleteResource)
    .put(resourceController.updateResource);

export default ResourceRouter;