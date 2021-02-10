import React, {useState, useEffect} from 'react';
import drawers from "../images/drawers.jpg";
import avatar from "../images/avatar-michelle.jpg";
import share from "../images/icon-share.svg";
import "./content.scss";
import Footer from "./Footer";

const Content = () => {
    const [flex, setFlex] = useState({
        display: "none"
    });

    useEffect(() => {
        if(document.querySelector(".footer")) {
            document.querySelector(".footer").style.display = "none"
        }
    });
 
    const changeFlex = () => {
        if(document.querySelector(".footer")) {
            document.querySelector(".footer").style.display = "flex"
        }
        setFlex(flex)
    };
    const changeCloseFlex = () => {
        if(document.querySelector(".footer")) {
            document.querySelector(".footer").style.display = "none"
        }
        setFlex(flex)
    };

    return (
        <div className="container">
            <div className="bg-img">           
                <img className="content-img" src={drawers} alt="board picture"/>
            </div>    
            <div className="content">
                <h1>Shift the overall look and feel by adding these wonderful 
                    touches to furniture in your home</h1>
                <p>Ever been in a room and felt like something was missing? Perhaps 
                    it felt slightly bare and uninviting. I’ve got some simple tips 
                    to help you make any room feel complete.</p>
            
                <acide className="user" >
                    <img className="user-img" src={avatar} alt="user picture"/>
                    <div className="text">
                        <p>Michelle Appleton</p>
                        <p>28 Jun 2020</p>
                    </div>
                    <div className="share-content">
                        <img onClick={changeFlex} className="icon" src={share} alt="share-icon"/>
                    </div>
                </acide>
            </div>
            <Footer className="footer" close={changeCloseFlex}/>
        </div>
    )
}
export default Content;
