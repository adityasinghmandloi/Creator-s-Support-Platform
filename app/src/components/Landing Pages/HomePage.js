import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import main_image from "../images/main.png";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="container">
          <div className="first__section text-center my-5">
            <h1 className="main__heading">
              Discover how CrowdWave can empower creators to inspire and impact
              communities worldwide.
            </h1>
            <h2 className="main__desc my-3">
              " Those who believe in their craft and connect with others are the
              ones who make a lasting difference. "
            </h2>
            <Link to="/signup" className="btn btn-primary my-5 main__btn">
              {" "}
              Join the platform{" "}
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </Link>
            <h3 className="main__desc my-3">
              Become part of a supportive community helping creators<br />
              bring their ideas to life and spread inspiration around the world.
            </h3>
          </div>
          <div className="second__section">
            <img
              src={main_image}
              alt="main_image"
              className="landing__image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

