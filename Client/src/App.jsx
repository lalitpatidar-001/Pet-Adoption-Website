import React from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import PetInfo from './pages/PetInfo';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <Router>
        <Routes >
          <Route  path="/" element={<Home/>}></Route>
          <Route  path="/pet/:id" element={<PetInfo/>}/>
          <Route  path="/profile/:id" element={<Profile/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App