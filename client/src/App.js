import { BrowserRouter as Router} from "react-router-dom"
import './App.css';
import axios from "axios";
import Navbar from './components/Navbar/Navbar';
import AllRoutes from "./AllRoutes";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
function App() {
  const dispatch = useDispatch()
  const [isDay, setIsDay] = useState(true);

  useEffect(( )=> {
    // Detect day or night when the component mounts
    setIsDay(isDaytime());{
    // Fetch day/night information from the server
    axios.get('https://localhost:5000/api/daynight')
      .then((response) => {
        setIsDay(response.data.isDay);
      })
      .catch((error) => {
        console.error('Error fetching day/night information:', error);
      });
  
  
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())}
  }, [dispatch]);

  return (
    <div className={`App ${isDay ? 'day' : 'night'}`}>
      <Router>
      
        <AllRoutes/>
        <Navbar/>
      </Router>
      
      
    </div>
  );
}
function isDaytime() {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 6 && hours < 18;
}

export default App;
