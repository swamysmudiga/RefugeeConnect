import express from "express";
import { addDonationsController, findDonationsController, getAllDonationsController} from '../controllers/donation-controller.js';
const donationRoutes = express.Router();

//add Notes controller and get all Notes Controller
donationRoutes.route('/').post(addDonationsController).get(getAllDonationsController);

//find by Donations id
donationRoutes.route('/:id').get(findDonationsController);

export default donationRoutes;
