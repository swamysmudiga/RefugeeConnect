import express from "express";
import { addCampController, findCampController, getAllCampsController, deleteCampByCampId, updateCampController} from '../controllers/camp-controller.js';

const campRoutes = express.Router();


//add Camp controller and get all Camps Controller
campRoutes.route('/').post(addCampController).get(getAllCampsController);

//find by Camp id
campRoutes.route('/:id').get(findCampController);

//delete by ID
campRoutes.route('/:campId').delete(deleteCampByCampId);


//update source by meetingId
campRoutes.route('/:campId').put(updateCampController);

export default campRoutes;
