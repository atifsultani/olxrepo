import React from 'react';
import './Props.css';
import './App.css';
import {BrowserRouter, Router,Link} from "react-router-dom";

import Header from "./comps/Header"
import HomePage from "./comps/Home";
import Footer from "./comps/Footer"

function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Router path="/" Component={HomePage} />
    <Footer />
   </BrowserRouter> 
  );
}
 
export default App;


    




