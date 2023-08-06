import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import styled from "styled-components";
import "./Header.css";
import { BsGlobe } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";

import Slider from "react-slick";

const Header = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <div>
          <div className="menu-bar-div">
            <Link className="header-logo" to="/">
              <img src="./images/Final Logo.png" alt="" />
            </Link>

            <div className="menu-bar">
              <div className="menu-bar-btn">
                <Link to="/investor">
                  <p>Investor</p>
                </Link>
                <Link to="/company">
                  <p>Company</p>
                </Link>
                <Link to="/enabler">
                  <p>Ecosystem Enabler</p>
                </Link>
                <Link to="/about">
                  <p>The AXUM Engine</p>
                </Link>
              </div>
              <div className="menu-right">
                <div className="lang-sec">
                  <BsGlobe className="lang-img" />
                  <p>EN</p>
                  <AiFillCaretDown />
                </div>
                <div className="menu-sign-btn">
                  <Link className="signup-btn" to="/">
                    Signup
                  </Link>
                  <Link className="signin-btn" to="/">
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <CgMenu className="hamburger" />
          </div>
        </div>

        {/* slider section  */}
        <Slider {...settings}>
          <div>
            <div
              style={{
                background: "url(images/top_bnr1.jpg) ",
                backgroundRepeat: "no-repeat",
                width: "100%",
                backgroundSize: "100%",
              }}
            >
              <div className="gradient-color">
                <div>
                  <p>A digital map of the African investment ecosystem</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                background: "url(images/top_bnr2.jpg) ",
                backgroundRepeat: "no-repeat",
                width: "100%",
                backgroundSize: "100%",
                // backgroundSize: "100% 100%",
              }}
              className="slider-img"
            >
              <div className="gradient-color">
                <div>
                  <p>A digital map of the African investment ecosystem</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                background: "url(images/top_bnr4.jpg)",
                backgroundRepeat: "no-repeat",
                width: "100%",
                backgroundSize: "100%",
                // backgroundSize: "100% 100%",
              }}
              className="slider-img"
            >
              <div className="gradient-color">
                <div>
                  <p>A digital map of the African investment ecosystem</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                background: "url(images/top_bnr5.jpg) ",
                backgroundRepeat: "no-repeat",
                width: "100%",
                backgroundSize: "100%",
                // backgroundSize: "100% 100%",
              }}
              className="slider-img"
            >
              <div className="gradient-color">
                <div>
                  <p>A digital map of the African investment ecosystem</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        {/* </div> */}
      </div>

      {/* excellent track record  */}
      <div className="track-record-div">
        <p className="excellent-track">Excellent Track Record</p>
        <div className="track-record">
          <div>
            <p className="count">200+</p>
            <p className="count-text">Companies Onboarded</p>
          </div>
          <div>
            <p className="count">50+</p>
            <p className="count-text">Ecosystem Partners</p>
          </div>
          <div>
            <p className="count">$235m</p>
            <p className="count-text">Funding Opportunity</p>
          </div>
        </div>
      </div>
    </>
  );
};

// const Wrapper = styled.div`
//   .menu-bar-div {
//     width: 100%;
//     padding: 80px 120px 347px;
//     display: flex;
//     justify-content: space-between;
//     -webkit-box-align: center;
//     align-items: center;
//     position: absolute;
//     z-index: 99;
//     .header-logo {
//       margin-right: 15px;
//     }
//     .menu-bar {
//       display: flex;
//       width: 90%;
//       justify-content: center;
//       .menu-bar-btn {
//         display: flex;
//         justify-content: space-around;
//         align-items: center;
//         a {
//           text-decoration: none;
//           font-size: 22px;
//           padding: 0px 22px;
//           color: white;
//           p {
//             text-align: center;
//           }
//         }
//       }
//       .menu-right {
//         display: flex;
//         float: right;
//         .lang-sec {
//           display: flex;
//           justify-content: center;
//           margin: 0 12px;
//           align-items: center;
//           .lang-img {
//             font-size: 35px;
//           }
//           p {
//             font-size: 22px;
//             padding: 0 6px;
//           }
//         }
//         .menu-sign-btn {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           a {
//             text-decoration: none;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             font-size: 22px;
//             padding: 14px 30px;
//             border-radius: 12px;
//           }
//           .signup-btn {
//             background-color: white;
//             color: rgb(247, 129, 45);
//           }
//           .signin-btn {
//             color: white;
//             border: 1px solid rgb(255, 255, 255);
//             margin-left: 12px;
//           }
//         }
//       }
//     }
//     .hamburger {
//       color: white;
//       font-size: 35px;
//       display: none;
//     }
//   }
//   .gradient-color {
//     background-repeat: no-repeat;
//     width: 100%;
//     background-size: 100%;
//     background-image: url(images/background1.png);
//     padding: 80px 120px 347px;
//     clip-path: polygon(0px 0px, 100% 0px, 100% 90%, 0% 74%);
//     shape-outside: polygon(0px 0px, 100% 0px, 100% 90%, 0% 74%);
//     opacity: 0.95;
//     div {
//       margin-top: 150px;
//       p {
//         font-family: Optima;
//         font-style: normal;
//         font-weight: normal;
//         font-size: 80px;
//         letter-spacing: -0.035em;
//         color: rgb(255, 255, 255);
//       }
//     }
//   }
//   .track-record-div {
//     background-repeat: no-repeat;
//     background-size: 100%;
//     background-image: url(images/background3.jpeg);
//     width: 100%;

//     padding: 200px 100px 80px;
//     clip-path: polygon(0px 0px, 100% 35%, 100% 99%, 0px 100%);
//     shape-outside: polygon(0px 0px, 100% 35%, 100% 99%, 0px 100%);
//     margin-top: -18%;
//     .excellent-track {
//       font-family: Optima;
//       letter-spacing: -0.035em;
//       font-size: 18px;
//       color: rgb(0, 0, 0);
//       font-weight: 400;
//     }
//     .track-record {
//       display: flex;
//       justify-content: space-between;
//       margin-top: 40px;
//       .count {
//         font-family: "Work Sans";
//         letter-spacing: -0.035em;
//         font-size: 62px;
//         color: rgb(247, 129, 45);
//         font-weight: 600;
//       }
//       .count-text {
//         font-family: "Work Sans";
//         letter-spacing: -0.035em;
//         font-size: 18px;
//         color: rgb(143, 143, 143);
//         font-weight: normal;
//         margin-top: 10px;
//       }
//     }
//   }
// `;
export default Header;
