import React, { useEffect, useState } from "react";
import "./Vision.css";
import Navbar from "./Navbar";
import vision from "../images/newvision.png";
import visionS from "../images/vision-1.png";

const Vision = () => {
  let [image, setImage] = useState(visionS);

  useEffect(() => {
    setTimeout(() => {
      setImage(vision);
    }, 1500);
  }, []);

  return (
    <>
      <Navbar />
      <div className="vision__main__container">
        <div className="container">
          <div className="first__section text-center my-5">
            <h1 className="vision__heading my-3">Our Vision</h1>
            <h2 className="vision__desc my-3">
              We strive to reshape the creator support ecosystem, making it
              accessible, secure, and intuitive for all creators.{" "}
              <br></br> By focusing on these principles, we empower creators to
              bring meaningful projects to life.
            </h2>
            <h2 className="vision__desc my-3">
              Our mission is to go beyond individual achievements and foster a
              vibrant <br></br> support network that positively impacts
              communities and enriches society as a whole.
            </h2>
          </div>
          <div className="second__section">
            <img src={image} alt="main_image" className="vision__image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;

