import React, {useState} from 'react';
import drawers from "../images/drawers.jpg";
import avatar from "../images/avatar-michelle.jpg";
import share from "../images/icon-share.svg";
import "./content.scss";
import Footer from "./Footer";

const Content = () => {
    const [display, setDisplay] = useState(false);

    function flexFooter(e) {
        e.preventDeafult();
        setDisplay();
    }
    return (
        <div className="container">    
            <img className="content-img" src={drawers} alt="board picture"/>
            <div className="content">
                <h1>Shift the overall look and feel by adding these wonderful 
                    touches to furniture in your home</h1>
                <p>Ever been in a room and felt like something was missing? Perhaps 
                    it felt slightly bare and uninviting. I’ve got some simple tips 
                    to help you make any room feel complete.</p>
            </div>
            <acide className="user">
                <img className="user-img" src={avatar} alt="user picture"/>
                <div className="text">
                    <p>Michelle Appleton</p>
                    <p>28 Jun 2020</p>
                </div>
                <img className="icon" src={share} alt="share-icon"/>
            </acide>
            <Footer />
        </div>
    )
}

export default Content;
