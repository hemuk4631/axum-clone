import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GrTwitter } from "react-icons/gr";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
// import "./Footer.css";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div className="subscriper-section">
        <p>Subscribe our newsletters</p>
        <input type="email" placeholder="Email address" />
        <button>Subscribe Now</button>
      </div>
      {/* footer  */}
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-top-section">
            <NavLink to="/">
              <img src="./images/MainLogo.svg" alt="" />
            </NavLink>
            <p className="footer-logo-title">
              A digital map of the African investment ecosystem
            </p>

            {/* social media icons  */}

            <div className="social-icon">
              <Link to="/">
                <GrTwitter className="icons" />
              </Link>
              <Link to="/">
                <AiFillFacebook className="icons" />
              </Link>
              <Link to="/">
                <AiOutlineInstagram className="icons" />
              </Link>
              <Link to="/">
                <AiFillLinkedin className="icons" />
              </Link>
              <Link to="/">
                <AiFillYoutube className="icons" />
              </Link>
            </div>
          </div>
          <div className="footer-heading">
            <p>Quick Links</p>
            <ul>
              <NavLink to="/investor">
                <li>INVESTOR</li>
              </NavLink>
              <NavLink to="/company">
                <li>COMPANY</li>
              </NavLink>
              <NavLink to="/enabler">
                <li>ENABLER</li>
              </NavLink>
            </ul>
          </div>
          <div className="footer-heading">
            <p>COMPANY</p>
            <ul>
              <NavLink to="/about">
                <li>The AXUM Engine</li>
              </NavLink>
            </ul>
          </div>
          <div className="footer-heading">
            <p>Others</p>
            <ul>
              <NavLink to="/">
                <li>Privacy Policy</li>
              </NavLink>
              <NavLink to="/">
                <li>Terms of Uses</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-copyrigth">
          <p>
            © Axum 2021 <span>All rights reserved</span>
          </p>

          <div></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* .subscriper-section */
  .subscriper-section {
    padding: 50px 100px;
    background-color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;

    p {
      font-family: Optima;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: -0.03em;
    }
    input {
      text-overflow: ellipsis;
      outline: none;
      border: 1px solid rgb(254, 243, 235);
      border-radius: 12px;
      padding: 13px;
      width: 45%;
      font-size: 16px;
      letter-spacing: -0.035em;
      line-height: 17px;
      font-family: "Work Sans";
    }
    button {
      background-color: rgb(254, 243, 235);
      color: rgb(0, 0, 0);
      padding: 22px 52px;
      border-radius: 12px;
      border: none;
      font-size: 14px;
      font-weight: 500;
      font-family: "Work Sans";
      position: absolute;
      right: 6%;
    }
  }

  /* footer-section  */
  .footer-container {
    background-color: rgb(10, 16, 69);
    color: rgb(255, 255, 255);
    padding: 60px 120px 40px;
    .footer-main {
      display: flex;
      justify-content: space-between;
      .footer-logo-title {
        color: rgb(255, 255, 255);
        font-size: 14px;
        line-height: 24px;
        width: 80%;
        margin-top: 20px;
      }
      .social-icon {
        display: none;
      }

      .footer-heading {
        p {
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 16px;
          color: rgb(255, 255, 255);
        }
        ul {
          list-style: none;
          a {
            text-decoration: none;
            li {
              font-family: "Work Sans";
              font-weight: 400;
              font-size: 12px;
              color: rgb(237, 237, 220);
              margin-top: 20px;
            }
          }
        }
      }
    }
    .footer-line {
      border: 1px solid rgb(237, 239, 252);
      opacity: 0.2;
      margin-top: 45px;
    }
    .footer-copyrigth {
      margin-top: 10px;
      display: flex;
      p {
        font-family: "Work Sans";
        font-size: 12px;
        span {
          margin-left: 40px;
        }
      }
      div {
        display: flex;
        flex: 1 1 0%;
        justify-content: flex-end;
      }
    }
  }
  /* responsive section  */
  @media only screen and (max-width: 767px) {
    .subscriper-section {
      padding: 40px;
      input {
        width: 50%;
      }
      button {
        padding: 20px 15px;
        right: 3%;
      }
    }
    .footer-container {
      padding: 60px 30px 40px;
    }
  }

  @media only screen and (max-width: 480px) {
    /* .subscriper-section  */
    .subscriper-section {
      display: none;
    }
    .footer-container {
      .footer-main {
        justify-content: center;
        .footer-top-section {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 75%;
          text-align: center;
          .footer-logo-title {
            display: none;
          }
          .social-icon {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin: 45px 0px;
            a {
              display: flex;
              justify-content: center;
              align-items: center;
              .icons {
                font-size: 25px;
                margin: 12px;
                color: white;
              }
            }
          }
        }
        .footer-heading {
          display: none;
        }
      }
      .footer-line {
        display: none;
      }
      .footer-copyrigth {
        justify-content: center;
        p {
          display: flex;
          flex-direction: column;
          text-align: center;
          span {
            margin: 15px 0;
          }
        }
        div {
          display: none;
        }
      }
    }
  }
`;

export default Footer;
