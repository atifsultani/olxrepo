import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Footer() {
 return(
     <React.Fragment>
  <div className="footer flex">
    <div className="block flex flex-col">
        <h2 className="title s16 fontb color">Popular categories</h2>
        <Link to="noul noulh font s14 color">Cars</Link>
        <Link to="noul noulh font s14 color">Flat for rent</Link>
        <Link to="noul noulh font s14 color">Jobs</Link>
        <Link to="noul noulh font s14 color">Mobile Phones</Link>
        </div>   
        <div className="block flex flex-col">
        <h2 className="title s16 fontb color">Trending Searchers</h2>
        <Link to="noul noulh font s14 color">Cars</Link>
        <Link to="noul noulh font s14 color">Flat for rent</Link>
        <Link to="noul noulh font s14 color">Jobs</Link>
        <Link to="noul noulh font s14 color">Mobile Phones</Link>
        </div>
        <div className="block flex flex-col">
        <h2 className="title s16 fontb color">About Us</h2>
        <Link to="noul noulh font s14 color">Cars</Link>
        <Link to="noul noulh font s14 color">Flat for rent</Link>
        <Link to="noul noulh font s14 color">Jobs</Link>
        <Link to="noul noulh font s14 color">Mobile Phones</Link>
        </div>
        <div className="block flex flex-col">
        <h2 className="title s16 fontb color">OLX</h2>
        <Link to="noul noulh font s14 color">Cars</Link>
        <Link to="noul noulh font s14 color">Flat for rent</Link>
        <Link to="noul noulh font s14 color">Jobs</Link>
        <Link to="noul noulh font s14 color">Mobile Phones</Link>
        </div> 
  </div>
  <div className="footerb flex">
      <h2 className="cfff font s14">Other Countries India - South Africa -Indonesia</h2>
      <h2 className="r cfff font s14">Free Classfieds in Pakistan. @2006-2020 OLX</h2>  
  </div>
  </React.Fragment>
 
    )
}

export default Footer;