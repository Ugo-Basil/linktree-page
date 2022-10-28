import React from "react";

import profileImg from "../assets/profile.jpg";
import share from "../assets/share.png";
import githubpng from "../assets/github-sign.png";
import slackpng from "../assets/slack.png";
import zuripng from "../assets/Zuri.Internship_Logo.png";
import footericon from "../assets/footericon.png";
import "./profile.css";
const Profile = () => {


  return (
    <div id="container">
      <div className="share_desktop">
        <a className="share_icon" href="/">
          <img src={share} className="share_png" alt="" />
        </a>
      </div>
      <div className="share_mobile">
        <a className="share_icon" href="/">
          <img src={share} className="share_png" alt="" />
        </a>
      </div>
      <div className="user-profile">
        <img src={profileImg} id="profile__img" alt="" />
        <h1 id="twitter">@BroBasilJ</h1>
        <h1 id="slack">Basil</h1>
      </div>

      <div className="social-links">
        <a
          className="link"
          id="twitter"
          href="https://twitter.com/BroBasilJ"
          target="__blank"
        >
          Twitter Link
        </a>
        <a
          className="link"
          id="btn__zuri"
          href="https://training.zuri.team/"
          target="__blank"
        >
          Zuri Team
        </a>
        <a
          className="link"
          id="books"
          href="http://books.zuri.team"
          target="__blank"
        >
          Zuri Books
        </a>
        <a
          className="link"
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=basil"
          target="__blank"
        >
          Python Books
        </a>
        <a
          className="link"
          id="pitch"
          href="https://background.zuri.team"
          target="__blank"
        >
          Background Check for Coders
        </a>
        <a
          className="link"
          id="book__design"
          href="https://books.zuri.team/design-rules "
          target="__blank"
        >
          Design Books
        </a>
      </div>

      <div className="icons">
        <a className="icon" href="/">
          <img className="social-icons" src={slackpng} alt="" />
        </a>
        <a className="icon" href="/">
          <img className="social-icons" src={githubpng} alt="" />
        </a>
      </div>

      <div className="footer">
        <div className="footer-items">
          <img src={zuripng} alt="" />
          <p className="footer-text">HNG Internship 9 Frontend Task</p>
          <img src={footericon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
