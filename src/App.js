import React from 'react';
import './App.css';
import {NavBar} from './components/NavBar';
import Homepage from './views/Homepage'
import {Routes, Route} from 'react-router-dom';
import ImageList from './components/ImageList'
import PaintingInfo from './components/PaintingInfo'

function App() {
  return (
    
      <NavBar>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/images" element={<ImageList />}/>
          <Route path="/painting/:paintingId" element={<PaintingInfo />}/>

        </Routes>
      </NavBar>
  
  );
};

export default App;
