// Create a new file, e.g., userLocation.js, in your routes folder

// routes/userLocation.js
import express from 'express';
import LocationController from '../controllers/Location.js'

const router = express.Router();

// Route to save user location data
router.post('/', LocationController.saveUserLocation);

export default router;
