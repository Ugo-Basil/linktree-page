import React from 'react'
import './footer.css'
import zuripng from "../../assets/Zuri.Internship_Logo.png";
import footericon from "../../assets/footericon.png";
const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-items">
        <img src={zuripng} alt="" />
        <p className="footer-text">HNG Internship 9 Frontend Task</p>
        <img src={footericon} alt="" />
      </div>
    </div>
  );
}

export default Footer