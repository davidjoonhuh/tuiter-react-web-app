import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import TuitsList from "../tuits"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import WhatsHappening from "../whats-happening";

function HomeScreen() {
 return(
   <>
    <h4>Home</h4>
    <WhatsHappening/>
    <TuitsList/>
   </>
 );
};
export default HomeScreen;