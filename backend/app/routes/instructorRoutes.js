import express from 'express';
import * as instructorController from '../controllers/instructor-controller.js';

const InstructorRouter = express.Router();

InstructorRouter.route('/')
    .get(instructorController.search)

InstructorRouter.route('/register')
    .post(instructorController.post)

InstructorRouter.route('/:id')
    .get(instructorController.get)
    .delete(instructorController.deleteInstructor)
    .put(instructorController.updateInstructor);

export default InstructorRouter;