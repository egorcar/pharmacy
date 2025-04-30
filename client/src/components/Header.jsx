import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import logo from "../assets/logo.png"; 
import banner from "../assets/banner.jpg"; 

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <Link to="/" className="logo">
            <img src={logo} alt="LisMedFarm" />
          </Link>
        </div>

        <div className="middle">
          <select className="category-select" onChange={(e) => window.location.href = `/category/${e.target.value}`}>
            <option value="">Categorii</option>
            <option value="medicamente">Medicamente</option>
            <option value="vitamine">Vitamine</option>
            <option value="cosmetice">Cosmetice</option>
          </select>

          <input type="text" placeholder="Caută" className="search-bar" />
          <button className="search-button">🔍</button>
        </div>

        <div className="right">
          <div className="contact-dropup">
            <button className="dropbtn">📞 Contact</button>
            <div className="dropup-content">
              <p>022 323 333</p>
              <p>contact@lismedfarm.md</p>
            </div>
          </div>

          <Link to="/login">🔐 Autentificare</Link>
          <Link to="/favorites">❤️</Link>
          <Link to="/checkout">🛒</Link>
          <button className="lang-btn">🌐</button>
        </div>
      </header>

      <div className="hero-banner">
        <img src={banner} alt="Pharmacy Background" />
      </div>
    </>
  );
};

export default Header;
