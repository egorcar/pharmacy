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
        <div className="category-dropdown">
          <div className="category-button">Categorii</div>
          <div className="category-menu">
            <div className="category-item">Articole de Igienă</div>
            <div className="category-item">Articole medicale</div>
            <div className="category-item">Diverse</div>
            <div className="category-item has-sub">
              Medicamente
              <div className="subcategory-menu">
                <div className="subcategory-item">Durere & Inflamație</div>
                <div className="subcategory-item">Răceală & Gripă</div>
                <div className="subcategory-item">Antibiotice</div>
              </div>
            </div>
            <div className="category-item">Parafarmaceutice</div>
            <div className="category-item">Social-importante</div>
            <div className="category-item">Suplimente alimentare</div>
          </div>
        </div>


          <input type="text" placeholder="Caută" className="search-bar" />
          <button className="search-button">🔍</button>
        </div>

        <div className="right">
          <div className="contact-dropup">
          <button className="dropbtn">📞 <span className="hide-on-small">Contact</span></button>
            <div className="dropup-content">
              <p>022 323 333</p>
              <p>contact@lismedfarm.md</p>
            </div>
          </div>

          <Link to="/login">🔐 <span className="hide-on-small">Autentificare</span></Link>
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
