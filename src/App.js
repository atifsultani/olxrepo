import React from 'react';
import './Props.css';
import './App.css';
import {BrowserRouter, Router} from "react-router-dom";

import Header from "./comps/Header"
import HomePage from "./comps/Home";

function App() {
  return (
   <BrowserRouter>
   <Header/>
    <Router path="/" Component={HomePage} />
   </BrowserRouter> 
  );
}
 
export default App;


    




