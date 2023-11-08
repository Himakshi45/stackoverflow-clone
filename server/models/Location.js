// Create a new file, e.g., Location.js, in your models folder

// models/Location.js
import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Location = mongoose.model('Location', locationSchema);

export default Location;
