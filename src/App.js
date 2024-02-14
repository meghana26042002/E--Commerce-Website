import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import NewContact from "./Components/NewContact/NewContact";

export const App = () => {
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<NewContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}