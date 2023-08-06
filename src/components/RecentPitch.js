import React from "react";
import styled from "styled-components";
// import "./RecentPitch.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecentPitchCard from "./RecentPitchCard";

const RecentPitch = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <RecentPitchDiv>
      <div className="pitches-container">
        <div className="pitches-heading-section">
          <div className="pitches-heading">Recent pitches</div>
          <div className="pitches-count">Showing 3 of 435</div>
        </div>
        <div className="pitches-slide-section">
          <Slider {...settings}>
            <div>
              <RecentPitchCard />
            </div>
            <div>
              <RecentPitchCard />
            </div>
            <div>
              <RecentPitchCard />
            </div>
            <div>
              <RecentPitchCard />
            </div>
          </Slider>
        </div>
      </div>
    </RecentPitchDiv>
  );
};

const RecentPitchDiv = styled.section`
  .pitches-container {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: column;
    -webkit-box-align: center;
    position: relative;
    align-items: flex-start;
    width: 74%;
    margin: 5vh auto 15vh;
    .pitches-heading-section {
      width: 100%;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      margin-bottom: 20px;
      padding-right: 20px;
      .pitches-heading {
        font-family: Optima;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 43px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(1, 10, 7);
      }
      .pitches-count {
        font-family: "Work Sans";
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(1, 10, 7);
      }
    }
    .pitches-slide-section {
      width: 100%;
      margin: auto;
      .slick-prev {
        display: block;
        z-index: 2;
        left: -6%;
        color: rgb(247, 129, 45);
        font-size: 0;
        height: 50px;
        width: 50px;
        margin: 0;
        &::before {
          content: "←";
          font-size: 40px;
          color: rgb(247, 129, 45);
        }
      }
      .slick-next {
        display: block;
        z-index: 2;
        right: -6%;
        color: rgb(247, 129, 45);
        font-size: 0;
        height: 50px;
        width: 50px;
        margin: 0;
        &::before {
          content: "→";
          font-size: 40px;
          color: rgb(247, 129, 45);
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
  }
  /* responsive section  */
  @media only screen and (max-width: 480px) {
    .pitches-container {
      width: 85%;

      .pitches-slide-section {
        width: 95%;
        .slick-prev {
          display: block;
          z-index: 2;
          left: -11%;
          color: rgb(247, 129, 45);
          font-size: 0;
          height: 50px;
          width: 50px;
          margin: 0;
          &::before {
            content: "←";
            font-size: 40px;
            color: rgb(247, 129, 45);
          }
        }
        .slick-next {
          display: block;
          z-index: 2;
          right: -11%;
          color: rgb(247, 129, 45);
          font-size: 0;
          height: 50px;
          width: 50px;
          margin: 0;
          &::before {
            content: "→";
            font-size: 40px;
            color: rgb(247, 129, 45);
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
    }
    /* .pitches-slide-section {
      width: 100%;
      .slick-prev {
        left: -11px;
      }
      .slick-next {
        right: -17px;
      }
    } */
  }
`;

export default RecentPitch;
