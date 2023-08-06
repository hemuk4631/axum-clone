import React from "react";
import "./WhyImgSection.css";

const WhyImgSection = (props) => {
  const {
    tempImg1,
    tempImg2,
    tempImg3,
    tempImg4,
    tempImg5,
    line1Img1,
    line1Img2,
    line1Img3,
    line2Img1,
    line2Img2,
    line2Img3,
    line2Img4,
    line3Img1,
    line3Img2,
    line3Img3,
    line3Img4,
  } = props;
  return (
    <>
      <div className="main-div">
        <div className="div1">
          <div className="temp-div">
            <img className="img" src={line1Img1} alt="" />
            <img className="temp-img" src={tempImg1} alt="" />
          </div>
          <img className="img" src={line1Img2} alt="" />
          <div className="temp-div">
            <img className="img" src={line1Img3} alt="" />
            <img className="temp-img" src={tempImg2} alt="" />
          </div>
        </div>
        <div className="div2">
          <img className="img" src={line2Img1} alt="" />
          <div className="temp-div">
            <img className="img" src={line2Img2} alt="" />
            <img className="temp-img" src={tempImg3} alt="" />
          </div>
          <img className="img" src={line2Img3} alt="" />
          <img className="lin2img4" src={line2Img4} alt="" />
        </div>
        <div className="div3">
          <div className="temp-div temp-div3">
            <img className="img" src={line3Img1} alt="" />
            <img className="temp-img" src={tempImg4} alt="" />
          </div>
          <img className="img" src={line3Img2} alt="" />
          <div className="temp-div temp-div3">
            <img className="img" src={line3Img3} alt="" />
            <img className="temp-img" src={tempImg5} alt="" />
          </div>
          <img className="img" src={line3Img4} alt="" />
        </div>
      </div>
    </>
  );
};

export default WhyImgSection;
