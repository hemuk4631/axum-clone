import React from "react";
import { NavLink } from "react-router-dom";
// import "./GetStarted.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const GetStarted = (props) => {
  const { img1, img2, img3, img4, des1, des2, des3, des4 } = props;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: "768px",
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <div className="wrapper">
        <Slider {...settings}>
          <div>
            <div className="section">
              <img src={img1} alt="" />
              <p className="pera1">{des1}</p>
            </div>
          </div>
          <div>
            <div className="section">
              <img src={img2} alt="" />
              <p className="pera2">{des2}</p>
            </div>
          </div>
          <div>
            <div className="section">
              <img src={img3} alt="" />
              <p className="pera2">{des3}</p>
            </div>
          </div>
          <div>
            <div className="section">
              <img src={img4} alt="" />
              <p className="pera2">{des4}</p>
            </div>
          </div>
        </Slider>

        <div className="btn-sec">
          <NavLink className="btn" to="/">
            Get Started Now
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .wrapper {
    background-color: rgb(254, 243, 235);
    border-radius: 24px;
    margin: 3% 100px 80px;
    padding: 100px;
    position: relative;

    div {
      .section {
        padding: 50px 0;
        img {
          height: 125px;
          width: 170px;
          margin: 33px 0;
        }
        p {
          margin: 10px 125px 10px 0;
          line-height: 35px;
          font-size: 19px;
          color: rgb(102, 102, 102);
        }
      }
    }
    .slick-prev {
      display: block;
      color: rgb(247, 129, 45);
      font-size: 0;
      height: 50px;
      width: 50px;
      margin: 0 0 0 -40px;
      &::before {
        content: "←";
        font-size: 40px;
        color: rgb(247, 129, 45);
      }
    }
    .slick-next {
      display: block;
      color: rgb(247, 129, 45);
      font-size: 0;
      height: 50px;
      width: 50px;
      margin: 0 -40px 0 0;
      &::before {
        content: "→";
        font-size: 40px;
        color: rgb(247, 129, 45);
      }
    }
    .btn-sec {
      .btn {
        background-color: rgb(247, 129, 45);
        color: rgb(255, 255, 255);
        border: none;
        font-family: "Work Sans";
        font-size: 16px;
        border-radius: 12px;
        padding: 16px 13px;
        cursor: pointer;
        text-decoration: none;
        width: 100%;
        text-align: center;
      }
    }
    .slick-dots {
      li.slick-active {
        button:before {
          font-size: 16px;
        }
      }
    }
  }

  /* responsive section  */
  @media only screen and (max-width: 767px) {
    .wrapper {
      div {
        .section {
          img {
            margin: 33px auto;
          }
          p {
            width: 70%;
            margin: 10px auto;
            text-align: center;
          }
        }
      }
    }
    .btn-sec {
      margin: 50px 0;
      display: flex;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 480px) {
    .wrapper {
      margin: 3% 25px 55px;
      div {
        .section {
          padding: 0;
          display: flex;
          flex-direction: column;
          img {
            height: 140px;
            margin: auto;
            padding: 10px 30px 0 15px;
          }
          p {
            /* margin: 20px; */
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
`;
export default GetStarted;
