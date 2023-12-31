import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import 'Routes' from 'react-router-dom'
import Home from './components/pages/Home/Home';
import Auth from './components/pages/Auth/Auth';
import Questions from './components/pages/Questions/Questions'
import AskQuestion from './components/pages/AskQuestion/AskQuestion';
import DisplayQuestion from './components/pages/Questions/DisplayQuestion';
import Tags from './components/pages/Tags/Tags'
import UserProfile from './components/pages/UserProfile/UserProfile';
import Users from './components/pages/Users/Users'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/AskQuestion'element={<AskQuestion/>}/>
      <Route path='/Tags'element={<Tags/>}/>
      <Route path='/Users' element={<Users />} />
      <Route path='/Users/:id' element={<UserProfile />} />
    <Route path='/Questions'element={<Questions/>}/>
    <Route path='/Questions/:id'element={<DisplayQuestion/>}/>
    </Routes>
  );
};

export default AllRoutes;
