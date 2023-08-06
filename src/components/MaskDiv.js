import React, { useState } from "react";
import styled from "styled-components";
// import "./MaskDiv.css";

const MaskDiv = ({
  img,
  heading,
  btn1,
  btn2,
  btn3,
  content1,
  content2,
  content3,
}) => {
  const [maskBtn, setMaskBtn] = useState("investor");
  return (
    <Wrapper>
      <div className="body-div1">
        <div className="mask-div">
          <img src={img} alt="" />
        </div>
        <div className="mask-details">
          <p className="mask-heading">{heading}</p>
          <div className="mask-menu">
            <div
              className={
                maskBtn === "investor"
                  ? "btn-section btn-active"
                  : "btn-section"
              }
              onClick={() => {
                setMaskBtn("investor");
              }}
            >
              {btn1}
            </div>
            <div
              className={
                maskBtn === "company" ? "btn-section btn-active" : "btn-section"
              }
              onClick={() => {
                setMaskBtn("company");
              }}
            >
              {btn2}
            </div>
            <div
              className={
                maskBtn === "enabler" ? "btn-section btn-active" : "btn-section"
              }
              onClick={() => {
                setMaskBtn("enabler");
              }}
            >
              {btn3}
            </div>
          </div>
          <p className="mask-pera">
            {maskBtn === "investor"
              ? content1
              : maskBtn === "company"
              ? content2
              : maskBtn === "enabler"
              ? content3
              : content1}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .body-div1 {
    margin: 150px 80px;
    display: flex;
    .mask-div {
      flex: 1 1 0%;
      img {
        width: 70%;
      }
    }
    .mask-details {
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      .mask-heading {
        font-family: Optima;
        font-weight: 500;
        font-size: 60px;
        letter-spacing: -0.035em;
        color: rgb(0, 0, 0);
        width: 95%;
      }
      .mask-menu {
        width: 40%;
        margin-top: 4%;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        .btn-section {
          color: rgb(247, 129, 45);
          font-family: "Work Sans";
          font-weight: 500;
          font-size: 16px;
          letter-spacing: -0.03em;
          cursor: pointer;
        }
        .btn-active {
          border-bottom: 2px solid rgb(247, 129, 45);
        }
      }
      .mask-pera {
        font-family: Optima;
        font-size: 20px;
        margin-top: 45px;
        color: rgb(143, 143, 143);
        letter-spacing: -0.035em;
        line-height: 20px;
        width: 65%;
      }
    }
  }

  /* responsive section  */
  @media only screen and (max-width: 767px) {
    .body-div1 {
      margin: 100px 45px;
      display: flex;
      .mask-div {
        margin-right: 10px;
        img {
          width: 100%;
        }
      }
      .mask-details {
        .mask-heading {
          font-size: 35px;
          width: 100%;
        }
        .mask-menu {
          width: 100%;
        }
        .mask-pera {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .body-div1 {
      flex-direction: column-reverse;
      margin: 90px 40px;
      .mask-div {
        text-align: center;
        margin: 25px 0;
      }
      .mask-details {
        .mask-heading {
          width: 100%;
          text-align: center;
        }
        .mask-menu {
          width: 100%;
        }
        .mask-pera {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;

export default MaskDiv;
