import React from 'react';
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import share from "../images/icon-share.svg";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">         
                <p>Share</p>
                <img className="facebook-icon" src={facebook} alt="facebook-icon"/>
                <img src={twitter} className="twitter-icon" alt="twitter-icon"/>
                <img src={pinterest} className="pinterest-icon" alt="pinterest-icon"/>
            </div>
            <div className="share-content">
                <img className="share-icon" src={share} alt="share-icon"/>
            </div>
        </div>
    )
}

export default Footer;
