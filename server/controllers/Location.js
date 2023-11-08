// Create a new file, e.g., LocationController.js, in your controllers folder

// controllers/LocationController.js
import Location from '../models/Location.js';

const LocationController = {
  saveUserLocation: async (req, res) => {
    try {
      // Get user location data from the request body
      const { lat, lng } = req.body;

      // Create a new location document in MongoDB
      const newLocation = new Location({
        lat,
        lng,
      });

      // Save the location data to the database
      await newLocation.save();

      res.status(201).json({ message: 'User location data saved successfully' });
    } catch (error) {
      console.error('Error saving user location data:', error);
      res.status(500).json({ message: 'Error saving user location data' });
    }
  },
};

export default LocationController;
