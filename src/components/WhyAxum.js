import React from "react";
import styled from "styled-components";
// import "./WhyAxum.css";
import WhyImgSection from "./WhyImgSection";
const WhyAxum = (props) => {
  const {
    headingWidth,
    heading,
    pera1,
    pera2,
    pera3,
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
    <Wrapper>
      {/* why Axum  */}

      <div className="why-div">
        <div className="why-div-details">
          <p className="heading" style={headingWidth}>
            {heading}
          </p>
          <p className="pera pera1">{pera1}</p>
          <p className="pera pera2">{pera2}</p>
          <p className="pera pera2">{pera3}</p>
        </div>
        <WhyImgSection
          tempImg1={tempImg1}
          tempImg2={tempImg2}
          tempImg3={tempImg3}
          tempImg4={tempImg4}
          tempImg5={tempImg5}
          line1Img1={line1Img1}
          line1Img2={line1Img2}
          line1Img3={line1Img3}
          line2Img1={line2Img1}
          line2Img2={line2Img2}
          line2Img3={line2Img3}
          line2Img4={line2Img4}
          line3Img1={line3Img1}
          line3Img2={line3Img2}
          line3Img3={line3Img3}
          line3Img4={line3Img4}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .why-div {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 100px 0px 150px 82px;

    .why-div-details {
      flex: 1.5 1 0%;
      .heading {
        font-family: Optima;
        font-size: 60px;
        letter-spacing: -0.035em;
        width: 75%;
      }
      .pera {
        font-family: Optima;
        font-size: 24px;
        margin-top: 50px;
        word-spacing: 4px;
        color: rgb(143, 143, 143);
        letter-spacing: -0.035em;
        line-height: 24px;
        width: 62%;
      }
      .pera2 {
        margin-top: 20px;
        width: 70%;
        /* marginTop: "15px", width: "70%"  */
      }
    }
  }

  /* responsive section  */

  @media only screen and (max-width: 767px) {
    .why-div {
      margin: 100px 0px 150px 0px;
      width: 100%;

      .why-div-details {
        .heading {
          font-size: 33px;
          width: 90%;
        }
        .pera {
          width: 95%;
        }
        .pera1 {
          margin-left: 0;
          margin-top: 30px;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .why-div {
      justify-content: center;
      flex-direction: column;
      margin: 100px 0px;
      /* margin: 100px 0px 200px 65px; */
      .why-div-details {
        text-align: center;
        margin: 0 30px 10px;
        .heading {
          width: 100%;
          text-align: center;
        }
        .pera {
          width: 100%;
        }
      }
    }
  }
`;

export default WhyAxum;
