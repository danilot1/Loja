import React from "react";
import logo from "../../assets/logo.png"
import "./style.css"

export default function Header (){
    return(
        <header classname ="header">
            <img src={logo} width={60} height={70}/>
            <input/>
        </header>

    );
}