import express from 'express';
import * as refugeeController from './../controllers/refugee-controller.js';

const router = express.Router();


router.get('/refugee', refugeeController.getAllRefugee);

router.post('/refugee/login', refugeeController.refugeeLogin);

router.post('/refugee/register', refugeeController.refugeeRegister);

router.get('/refugee/:id', refugeeController.getOneRefugeeById);

router.patch('/refugee/:id', refugeeController.updateRefugeeById);

router.delete('/refugee/:id', refugeeController.removeRefugeeById);


export default router;
