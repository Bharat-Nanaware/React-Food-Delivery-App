import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Section2 from './pages/Home/Section2';
import "./App.css";
import Section3 from './pages/Home/section3';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/Shop' element={<Section2 />}></Route>
        <Route path='/Admin' element={<Section3/>}></Route>
      </Routes>

    </BrowserRouter>
  );
};

export default App;

