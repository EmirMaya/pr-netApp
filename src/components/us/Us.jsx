//imports
import "./us.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Us = () => {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);

  const handleIconClick1 = () => {
    setShowInfo1(!showInfo1);
  };

  const handleIconClick2 = () => {
    setShowInfo2(!showInfo2);
  };

  const handleIconClick3 = () => {
    setShowInfo3(!showInfo3);
  };

  const handleIconClick4 = () => {
    setShowInfo4(!showInfo4);
  };

  return (
    <div className="usDiv">
      <Header />
      <main>
        <h2>Nosotros</h2>
        <div className="infoDiv">
          <div className="iconContainer">
            <div className="titleDiv">
              <i class="fas fa-plus" onClick={handleIconClick1}></i>
              <h3>Quienes somos</h3>
            </div>

            {showInfo1 && (
              <div className="info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ab expedita harum doloribus
                praesentium quae eos quod nostrum, facere in blanditiis voluptates doloremque, fugit impedit possimus,
                libero quaerat adipisci laborum.
              </div>
            )}
          </div>

          <div className="iconContainer">
            <div className="titleDiv">
              <i class="fas fa-plus" onClick={handleIconClick2}></i>
              <h3>Quienes somos</h3>
            </div>

            {showInfo2 && (
              <div className="info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ab expedita harum doloribus
                praesentium quae eos quod nostrum, facere in blanditiis voluptates doloremque, fugit impedit possimus,
                libero quaerat adipisci laborum.
              </div>
            )}
          </div>

          <div className="iconContainer">
            <div className="titleDiv">
              <i class="fas fa-plus" onClick={handleIconClick3}></i>
              <h3>Quienes somos</h3>
            </div>

            {showInfo3 && (
              <div className="info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ab expedita harum doloribus
                praesentium quae eos quod nostrum, facere in blanditiis voluptates doloremque, fugit impedit possimus,
                libero quaerat adipisci laborum.
              </div>
            )}
          </div>

          <div className="iconContainer">
            <div className="titleDiv">
              <i class="fas fa-plus" onClick={handleIconClick4}></i>
              <h3>Quienes somos</h3>
            </div>

            {showInfo4 && (
              <div className="info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ab expedita harum doloribus
                praesentium quae eos quod nostrum, facere in blanditiis voluptates doloremque, fugit impedit possimus,
                libero quaerat adipisci laborum.
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Us;
