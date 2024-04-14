import express from 'express';
import * as refugeeController from './../controllers/refugee-controller.js';

const router = express.Router();

router.route('/register')
    .post(refugeeController.refugeeRegister)

router.route('/')
    .get(refugeeController.getAllRefugee)

router.route('/login')
    .post(refugeeController.refugeeLogin)

router.route('/:id')
    .get(refugeeController.getOneRefugee)
    .patch(refugeeController.updateRefugeeById)
    .delete(refugeeController.removeRefugeeById);

export default router;