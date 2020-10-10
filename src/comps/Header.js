import React from 'react';
import { Link } from "react-router-dom";


function Header (){ 
        return (
            <div className="header fixed flex">
                <div className="logo">
                <img src={require("./ui/olxlogo.png")} />
                </div>
                <div className="location rel">
                    <div className="icon-search" />
                    <input className="label" placeholder="Your Location" value="Pakistan"/>
                </div>
            </div>
        );
}

export default Header;