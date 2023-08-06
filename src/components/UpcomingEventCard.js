import React from "react";
import styled from "styled-components";

const UpcomingEventCard = () => {
  return (
    <EventCardDiv>
      <div className="upcoming-event-section">
        <div className="upcoming-event-slide">
          <div className="left-event-section">
            <p className="left-event-heading">AFD: Appel À Candidatures</p>
            <div>
              Le programme est conçu pour aider les start-ups en phase de
              croissance
            </div>
            <button className="book-event-btn">
              <img src="./images/blueArrow.png" alt="" />
              Book Event
            </button>
            <div className="left-event-time">
              <p>Friday, December 30,</p>
              <p>2022 3:13 PM</p>
            </div>
          </div>
          <div className="right-event-section">
            <img src="./images/1635264875505.jpg" alt="" />
          </div>
        </div>
      </div>
    </EventCardDiv>
  );
};
const EventCardDiv = styled.section`
  .upcoming-event-section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* background-color: red; */

    .upcoming-event-slide {
      display: flex;
      gap: 10%;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      margin: 0 10px;
      width: 100%;
      height: 250px;
      background-color: aliceblue;
      /* box-shadow: rgb(0 0 0 / 25%) 0px 10px 25px; */
      border-radius: 10px;
      padding: 1.5rem 1.3rem;

      .left-event-section {
        flex: 3;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 60%;

        .left-event-heading {
          font-family: Optima;
          font-weight: 500;
          font-size: 22px;
          line-height: 24px;
          color: rgb(0, 0, 0);
          height: 25%;
        }
        div {
          font-family: Optima;
          font-size: 16px;
          line-height: 24px;
          color: rgb(0, 0, 0);
          margin-top: 0.4rem;
          width: 90%;
          height: 25%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .book-event-btn {
          width: fit-content;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          background: transparent;
          border-radius: 5px;
          color: rgb(12, 27, 156);
          border: 1px solid rgb(12, 27, 156);
          outline: none;
          font-family: "Work Sans";
          font-weight: bold;
          font-size: 1.2rem;
          line-height: 16px;
          letter-spacing: 0.01em;
          padding: 0.7rem 1.3rem;
          margin-top: 1rem;
          img {
            margin-right: 1rem;
          }
        }
      }
      .right-event-section {
        flex: 1;
        img {
          height: 157px;
          /* width: 100%; */
        }
      }
    }
  }

  /* responsive section  */
  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 480px) {
    .upcoming-event-section {
      .upcoming-event-slide {
        height: fit-content;
        gap: 2px;
        padding: 10px;
        .left-event-section {
          height: fit-content;
          .left-event-heading {
            font-size: 16px;
            line-height: normal;
            font-weight: bold;
            height: fit-content;
          }
          div {
            width: 95%;
            font-size: 12px;
            height: auto;
            line-height: normal;
            margin: 3px 0;
          }
          .book-event-btn {
            font-size: 12px;
            margin: 5px 0;
          }
          .left-event-time {
            font-size: 12px;
          }
        }

        .right-event-section {
          flex: 1;
          img {
            height: 100px;
          }
        }
      }
    }
  }
`;
export default UpcomingEventCard;
