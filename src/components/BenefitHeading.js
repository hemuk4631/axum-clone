import React from "react";
import styled from "styled-components";
// import "./BenefitHeading.css";

const BenefitHeading = (props) => {
  const { heading, des } = props;
  return (
    <Wrapper>
      {/* heading after blue theme  */}
      <div className="benefit-heading-div">
        <p className="benefit-heading">{heading}</p>
        <p className="benefit-details">{des}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .benefit-heading-div {
    margin: 80px 20px 0px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    .benefit-heading {
      font-family: Optima;
      font-style: normal;
      font-weight: normal;
      font-size: 60px;
      line-height: 100.1%;
      text-align: center;
      letter-spacing: -0.035em;
      color: rgb(0, 0, 0);
      width: 51%;
    }
    .benefit-details {
      font-family: "Work sans";
      font-size: 24px;
      color: rgb(143, 143, 143);
      margin-top: 3%;
      text-align: center;
      width: 44%;
    }
  }

  /* responsive section  */
  @media only screen and (max-width: 767px) {
    /* benefit heading  */
    .benefit-heading-div {
      .benefit-heading {
        font-size: 35px;
        width: 70%;
      }
      .benefit-details {
        width: 85%;
        font-size: 18px;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .benefit-heading-div {
      .benefit-heading {
        width: 85%;
      }
      .benefit-details {
        width: 95%;
        margin-top: 6%;
      }
    }
  }
`;

export default BenefitHeading;
