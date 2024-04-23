
import RefugeeRouter  from "./refugeeRoutes.js";
import ResourceRouter  from "./ResourceRoutes.js";
import LogInroutes from "./LogInRoutes.js"
import instructorRoutes from "./instructorRoutes.js";
import donationRoutes from "./donation-routes.js";
import campRoutes from "./camp-routes.js";
import userstoryRoutes from "./userstoryRoutes.js"
import userRoutes from "./userRoutes.js";
import  multer from 'multer';
import path from 'path';
import express from 'express';
import axios from 'axios';

//Initilize the routes
export const initializeRouter = (app)=>{



    app.use('/refugee/login',LogInroutes);
    app.use('/refugee',RefugeeRouter);
    app.use('/resource',ResourceRouter);
    app.use('/instructor',instructorRoutes);
    app.use('/donation',donationRoutes);
    app.use('/camp',campRoutes);
    app.use('/userstory',userstoryRoutes);
    app.use('/user',userRoutes);



    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/'); // Destination directory for file uploads
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname); // Use the original filename for uploaded file
        }
      });

      const upload = multer({ storage: storage });
      const __dirname = path.dirname(new URL(import.meta.url).pathname);

      app.use('/uploads', express.static('uploads'));

    app.post('/upload', upload.single('image'), (req, res) => {
        // Check if file is present in the request

        console.log("inside upload...");
        if (!req.file) {
          return res.status(400).json({ error: 'No file uploaded' });
        }
      
        // Get the file path of the uploaded file
        const filePath = req.file.path;
      
        // Respond with the file path
        res.json({ imagePath: filePath });
      });


      app.get('/directions', async (req, res) => {
        try {
          // Extract query parameters from the request
          const { origin, destination, key } = req.query;
      
          // Make a request to the Google Maps API
          const response = await axios.get('https://maps.googleapis.com/maps/api/directions/json', {
            params: {
              origin,
              destination,
              key,
            },
          });
      
          // Forward the response from Google Maps API to the client
          res.json(response.data);
        } catch (error) {
          console.error('Error fetching directions:', error.message);
          res.status(500).json({ error: 'Internal server error' });
        }
      });
      
}
