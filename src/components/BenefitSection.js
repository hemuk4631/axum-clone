import React from "react";
import styled from "styled-components";
// import "./BenefitSection.css";

const BenefitSection = () => {
  return (
    <Wrapper>
      <div className="benefit-container">
        <div className="benefit-section-1">
          <div className="img-section">
            <img src="./images/desktop.svg" alt="" />
          </div>
        </div>
        <div className="benefit-section-2">
          <p>
            Axum is an end to end digital deal flow management system that
            simplifies your interactions African companies.
          </p>
        </div>
        <div className="benefit-section-3">
          <p>
            Axum will provide a direct communication channel with ecosystems
            enablers
          </p>
        </div>
        <div className="benefit-section-4">
          <p>
            Axum constructs a pipeline based your investment history and the
            areas you would like to explore.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .benefit-container {
    background-color: rgb(254, 243, 235);
    border-radius: 24px;
    margin: 3% 80px 80px;
    padding: 90px 80px;
    position: relative;
    .benefit-section-1 {
      display: grid;
      place-items: center;
      .img-section {
        height: 350px;
        width: 350px;
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        display: grid;
        place-items: center;
        img {
          width: 55%;
        }
      }
    }
    .benefit-section-2 {
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(247, 129, 45);
      border-radius: 12px;
      padding: 22px;
      width: 35%;
      position: absolute;
      left: 10%;
      top: 19%;
      p {
        font-family: "Work Sans";
        font-size: 16px;
        letter-spacing: -0.03em;
        color: rgb(102, 102, 102);
        line-height: 19px;
        text-align: left;
      }
    }
    .benefit-section-3 {
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(247, 129, 45);
      border-radius: 12px;
      padding: 22px;
      width: 25%;
      position: absolute;
      left: 51%;
      top: 8%;
      p {
        font-family: "Work Sans";
        font-size: 16px;
        letter-spacing: -0.03em;
        color: rgb(102, 102, 102);
        line-height: 19px;
        text-align: left;
      }
    }
    .benefit-section-4 {
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(247, 129, 45);
      border-radius: 12px;
      padding: 22px;
      width: 30%;
      position: absolute;
      left: 53%;
      top: 28%;
      p {
        font-family: "Work Sans";
        font-size: 16px;
        letter-spacing: -0.03em;
        color: rgb(102, 102, 102);
        line-height: 19px;
        text-align: left;
      }
    }
  }

  /* responsive section  */
  @media only screen and (max-width: 767px) {
    .benefit-container {
      margin: 3% 20px 80px;
      padding: 65px;
      .benefit-section-1 {
        .img-section {
          height: 275px;
          width: 275px;
        }
      }
      .benefit-section-2 {
        padding: 12px;
        left: 6%;
        top: 18%;
        p {
          font-size: 13px;
        }
      }
      .benefit-section-3 {
        width: 35%;
        padding: 12px;
        left: 55%;
        top: 13%;
        p {
          font-size: 13px;
        }
      }
      .benefit-section-4 {
        padding: 12px;
        left: 65%;
        top: 35%;
        p {
          font-size: 13px;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .benefit-container {
      padding: 65px 35px;
      margin: 3% 40px 80px;
      .benefit-section-1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 35px;
      }
      .benefit-section-2 {
        position: static;
        width: 100%;
        margin: 13px 0;
      }
      .benefit-section-3 {
        width: 100%;
        margin: 13px 0;
        position: static;
      }
      .benefit-section-4 {
        width: 100%;
        margin: 13px 0;
        position: static;
      }
    }
  }
`;
export default BenefitSection;
