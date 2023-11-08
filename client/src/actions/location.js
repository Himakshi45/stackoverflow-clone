import * as api from "../api";

// Inside the componentDidMount method of UserLocationMap.js
componentDidMount();{
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;

    // Send location data to the server
    try {
      await axios.post('/api/location', {
        lat: latitude,
        lng: longitude,
      });
    } catch (error) {
      console.error('Error sending location data:', error);
    }

    this.setState({
      userLocation: {
        lat: latitude,
        lng: longitude,
      },
    });
  });
}
