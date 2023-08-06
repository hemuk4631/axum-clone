import React from "react";
import styled from "styled-components";
// import "./RequestForm.css";

const RequestForm = () => {
  return (
    <Wrapper>
      <div className="demo-form-container">
        <div>
          <p className="demo-heading">Request a Demo</p>
          <p className="demo-pera">
            Just answer a few simple questions so we can personalise your AXUM
            experience.
          </p>
        </div>
        <div className="demo-form-section">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your business email address" />
          <input type="tel" placeholder="Your phone number" />

          <div className="dropdown-section">
            <div>Select your Option</div>
            <img src="./images/down-arrow.svg" alt="" />
          </div>

          <button className="demo-btn">Request a Demo</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .demo-form-container {
    background-repeat: no-repeat;
    background-size: cover;
    padding: 150px;
    background-image: url(images/Forest.png);
    div {
      .demo-heading {
        font-family: Optima;
        font-size: 55px;
        letter-spacing: -0.035em;
        color: rgb(255, 255, 255);
        text-align: center;
      }
      .demo-pera {
        font-family: "Work Sans";
        font-size: 14px;
        letter-spacing: -0.03em;
        line-height: 19px;
        color: rgb(255, 255, 255);
        margin: 15px auto auto;
        width: 25%;
      }
    }
    .demo-form-section {
      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      input {
        margin-top: 20px;
        border: 1px solid rgb(204, 85, 0);
        border-radius: 12px;
        outline: none;
        padding: 12px;
        width: 45%;
        color: rgb(102, 102, 102);
        font-size: 16px;
        letter-spacing: -0.035em;
        line-height: 17px;
        font-family: "Work Sans";

        &:placeholder-shown {
          text-overflow: ellipsis;
        }
      }

      .dropdown-section {
        margin-top: 20px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        background: rgb(255, 255, 255);
        border: 1px solid rgb(204, 85, 0);
        box-sizing: border-box;
        border-radius: 12px;
        padding: 8px 12px;
        width: 45%;
        position: relative;

        div {
          font-size: 16px;
          line-height: 25px;
          color: rgb(189, 189, 189);
        }
        img {
          cursor: pointer;
        }
      }
      .demo-btn {
        background-color: rgb(10, 16, 69);
        color: rgb(255, 255, 255);
        border: none;
        border-radius: 12px;
        padding: 12px;
        cursor: pointer;
        margin-top: 50px;
        width: 45%;
        font-size: 16px;
        font-weight: 500;
        font-family: "Work Sans";
      }
    }
  }

  /* responsive section  */
  @media only screen and (max-width: 767px) {
    .demo-form-container {
      padding: 68px;
      div {
        .demo-pera {
          width: 50%;
          text-align: center;
        }
      }
      .demo-form-section {
        input,
        .dropdown-section,
        .demo-btn {
          width: 65%;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .demo-form-container {
      padding: 150px 40px;
      div {
        .demo-pera {
          width: 100%;
          text-align: center;
        }
      }
      .demo-form-section {
        input,
        .dropdown-section,
        .demo-btn {
          width: 100%;
        }
      }
    }
  }
`;
export default RequestForm;
