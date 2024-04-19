import express from 'express';
import * as userController from '../controllers/user-controller.js';

const userRouter = express.Router();

userRouter.route('/')
    .get(userController.search)

userRouter.route('/register')
    .post(userController.userRegister)

userRouter.route('/:id')
    .get(userController.getUserById)
    .delete(userController.removeUserById)
    .put(userController.updateUserById);

export default userRouter;