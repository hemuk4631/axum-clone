import React from "react";
import styled from "styled-components";
// import "./RecentPitchCard.css";
const RecentPitchCard = () => {
  return (
    <Wrapper>
      <div className="pitches-card">
        <div>
          <div className="pitches-card-img">
            <img src="./images/OIP.jpg" alt="" />
            <div className="pitches-card-btn-div">
              <button className="pitches-card-btn">Follow</button>
            </div>
          </div>
          <div className="pitches-card-details-div">
            <div className="pitches-card-details">
              <div style={{ width: "100%" }}>
                <div className="pitches-card-details-main">
                  <div style={{ width: "60%" }}>
                    <div style={{ display: "flex" }}>
                      <div className="pitches-company-logo">
                        <img src="./images/OIP.jpg" alt="" />
                      </div>
                      <div className="pitches-company-name">Lebalma</div>
                      <img
                        className="pitches-wishlist"
                        src="./images/heart.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="fund-rasing-heading">Fund raising target</p>
                      <p className="fund-rasing-amount">$50K</p>
                      <p className="fund-rasing-details">
                        équipez les professionnels en matériels électroménager
                        et high tech à crédit avec un système de paiement souple
                        et adapté. « LEBALMA » vise aussi à...
                      </p>
                    </div>
                  </div>
                  <div style={{ width: "30%" }}>
                    <div className="pitches-card-following">
                      <p className="pitches-card-left-pera">0 Following</p>
                    </div>
                    <div className="pitches-card-left">
                      <p className="pitches-card-left-pera">0 Followers</p>
                    </div>
                    <div className="pitches-card-left">
                      <p className="pitches-card-left-heading">Sector</p>
                      <p className="pitches-card-left-pera">
                        E-Commerce, Finance / FinTech
                      </p>
                    </div>
                    <div className="pitches-card-country">
                      <p className="pitches-card-left-heading">Country</p>
                      <p className="pitches-card-left-pera">Senegal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pitches-card-bottom-div">
          <div className="pitches-card-bottom">
            <div className="pitches-card-range">
              <div
                style={{ backgroundColor: "rgb(194, 32, 51)" }}
                className="pitches-range-color"
              ></div>
              <div
                style={{ backgroundColor: "rgb(230, 187, 59)" }}
                className="pitches-range-color"
              ></div>
              <div
                style={{ backgroundColor: "rgb(255, 241, 57)" }}
                className="pitches-range-color"
              ></div>
              <div
                style={{ backgroundColor: "rgb(151, 189, 76)" }}
                className="pitches-range-color"
              ></div>
              <div
                style={{ backgroundColor: "rgb(106, 169, 80)" }}
                className="pitches-range-color"
              ></div>
              <div className="pitches-range-cursor"></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .pitches-card {
    background: rgb(255, 255, 255);
    border: 1px solid rgb(204, 204, 204);
    box-shadow: rgb(0 0 0 / 25%) 4px 0px 10px 4px;
    border-radius: 10px;
    margin: 15px;
    div {
      .pitches-card-img {
        position: relative;
        width: 100%;
        padding-top: 10px;
        img {
          width: 100%;
          height: 100px;
          cursor: pointer;
        }
        .pitches-card-btn-div {
          position: absolute;
          bottom: -14px;
          right: 10px;
          display: flex;
          .pitches-card-btn {
            width: 100px;
            height: 36px;
            border: transparent;
            background: rgb(10, 16, 69);
            border-radius: 5px;
            font-family: "Work Sans";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.01em;
            color: rgb(255, 255, 255);
          }
        }
      }
      .pitches-card-details-div {
        margin-top: 30px;
        align-self: flex-start;
        padding: 0px 15px;
        .pitches-card-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          div {
            .pitches-card-details-main {
              display: flex;
              justify-content: space-between;
              div {
                div {
                  .pitches-company-logo {
                    width: 40px;
                    height: 40px;
                    bottom: -35px;
                    right: 25px;
                    margin-right: 15px;
                    margin-bottom: 10px;
                    img {
                      width: 100%;
                      height: 100%;
                      box-shadow: rgb(0 0 0 / 25%) 0px 5px 8px 2px;
                    }
                  }
                  .pitches-company-name {
                    font-family: "Work Sans";
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 18px;
                    letter-spacing: -0.03em;
                    color: rgb(0, 0, 0);
                    cursor: pointer;
                  }
                  .pitches-wishlist {
                    margin-left: 15px;
                    cursor: pointer;
                    box-shadow: rgb(0 0 0 / 25%) 0px 2px 8px 2px;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                  }
                }
                div {
                  .fund-rasing-heading {
                    font-family: "Work sans";
                    font-size: 10px;
                    color: rgb(143, 143, 143);
                  }
                  .fund-rasing-amount {
                    font-family: "Work sans";
                    font-size: 48px;
                    color: rgb(0, 0, 0);
                    font-weight: 600;
                    line-height: 128.8%;
                  }
                  .fund-rasing-details {
                    font-family: "Work sans";
                    font-size: 12px;
                    color: rgb(0, 0, 0);
                    line-height: 12px;
                  }
                }
              }
              div {
                .pitches-card-following {
                  border-bottom: 2px solid rgb(143, 143, 143);
                  .pitches-card-left-pera {
                    font-family: "Work sans";
                    font-size: 14px;
                    color: rgb(0, 0, 0);
                    font-weight: 500;
                    line-height: 16px;
                    margin-bottom: 10%;
                  }
                }
                .pitches-card-left {
                  border-bottom: 2px solid rgb(143, 143, 143);
                  margin-top: 20%;
                  .pitches-card-left-pera {
                    font-family: "Work sans";
                    font-size: 14px;
                    color: rgb(0, 0, 0);
                    font-weight: 500;
                    line-height: 16px;
                    margin-bottom: 10%;
                  }
                  .pitches-card-left-heading {
                    font-family: "Work sans";
                    font-size: 12px;
                    color: rgb(143, 143, 143);
                  }
                }
                .pitches-card-country {
                  margin-top: 20%;
                  .pitches-card-left-pera {
                    font-family: "Work sans";
                    font-size: 14px;
                    color: rgb(0, 0, 0);
                    font-weight: 500;
                    line-height: 16px;
                    margin-bottom: 10%;
                  }
                  .pitches-card-left-heading {
                    font-family: "Work sans";
                    font-size: 12px;
                    color: rgb(143, 143, 143);
                  }
                }
              }
            }
          }
        }
      }
    }
    .pitches-card-bottom-div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      .pitches-card-bottom {
        margin: 5px 0px 20px;
        width: 100%;
        padding: 0px 15px;
        .pitches-card-range {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          position: relative;
          width: 100%;
          height: 6px;
          .pitches-range-color {
            width: 20%;
            height: 100%;
          }
          .pitches-range-cursor {
            position: absolute;
            width: 8px;
            height: 24px;
            background: rgb(255, 255, 255);
            border: 1px solid rgb(110, 121, 140);
            box-sizing: border-box;
            border-radius: 100px;
            top: -8px;
            left: 10%;
          }
        }
      }
    }
  }
`;

export default RecentPitchCard;
