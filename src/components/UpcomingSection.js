import React from "react";
import styled from "styled-components";
// import "./UpcomingSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpcomingEventCard from "./UpcomingEventCard";

const UpcomingSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <UpcomingDiv>
      <div className="upcoming-section">
        <div className="upcoming-event-heading">
          <div className="upcoming-event">
            <div>Upcoming Events</div>
            <div className="pageNo">
              <p>Showing</p>
              <p>1 of 1</p>
            </div>
          </div>
        </div>
        <div className="upcoming-slide-section">
          <div className="upcoming-slide">
            <Slider {...settings}>
              <div>
                <UpcomingEventCard />
              </div>
              <div>
                <UpcomingEventCard />
              </div>
              <div>
                <UpcomingEventCard />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </UpcomingDiv>
  );
};

const UpcomingDiv = styled.section`
  .upcoming-section {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: column;
    -webkit-box-align: center;
    position: relative;
    align-items: flex-start;
    width: 74%;
    margin: 5vh auto 15vh;

    .upcoming-event-heading {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      flex-direction: column;
      -webkit-box-align: center;
      position: relative;
      align-items: flex-start;
      margin: 10vh auto 2vh;
      width: 100%;
      .upcoming-event {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px 10px 0px;
        width: 100%;
        div {
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
        .pageNo {
          display: flex;
          gap: 10px;
          div {
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
      }
    }

    .upcoming-slide-section {
      width: 100%;
      display: flex;
      justify-content: center;
      .upcoming-slide {
        width: 55%;
        .slick-prev {
          display: block;
          left: -12%;
          z-index: 5;
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
          right: -12%;
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
  }

  @media only screen and (max-width: 480px) {
    .upcoming-section {
      width: 82%;
      margin: auto;
      .upcoming-event-heading {
        margin: 12px auto;
        .upcoming-event {
          gap: 10px;
          padding: 10px 0;
          div {
            font-size: 22px;
            font-weight: bold;
            line-height: normal;
          }
          .pageNo {
            font-size: 20px;
            flex-direction: column;
            gap: 1px;
            p {
              font-size: 18px;
            }
          }
        }
      }

      .upcoming-slide-section {
        .upcoming-slide {
          width: 100%;
          .slick-prev {
            left: -11%;
          }
          .slick-next {
            right: -11%;
          }
        }
      }
    }
  }
`;

export default UpcomingSection;
