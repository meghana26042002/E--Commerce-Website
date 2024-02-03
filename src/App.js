import React from "react";
import { BrowserRouter,Route, Routes   } from 'react-router-dom';

import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';





 export  const App= ()=> {
  return(
  
<div className="App">
<BrowserRouter>
<Navbar />
        
        
        <Routes>
        <Route path="/Home" element={<Home />} />
    
          
      

          
        </Routes>
        </BrowserRouter>
      
      
      
 </div>
  
  
  

 
  



  );
 }