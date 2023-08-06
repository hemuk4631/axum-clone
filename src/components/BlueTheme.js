import React from "react";
import styled from "styled-components";
// import "./BlueTheme.css";

const BlueTheme = (props) => {
  const { userImg, heading, name, address } = props;
  return (
    <Wrapper>
      {/* blue theme  */}
      <div className="blue-theme">
        <div className="blue-theme-sec1">
          <div className="img-div">
            <img className="oldman-img" src={userImg} alt="" />
          </div>
          <div className="blue-sec1-right">
            <div className="blue-sec1-right-div">
              <img src="./images/Dash.svg" alt="" />
              <h4>{heading}</h4>
              <p className="pera1">{name}</p>
              <p className="pera2">{address}</p>
            </div>
          </div>
        </div>
        <div className="blue-theme-sec2">
          <div className="blue-sec2-top">
            <div className="blue-sec2-top-left blue-box">
              <img src="./images/OrangeTick.svg" alt="" />
              <div className="hover-div">
                <p className="blue-pera1">African Assets</p>
                <p className="displayNone">
                  Get unrivalled access to the best African deals and transact
                  digitally alongside experienced African investors
                </p>
              </div>
            </div>
            <div className="blue-sec2-top-right blue-box">
              <img src="./images/OrangeTick.svg" alt="" />
              <div className="hover-div">
                <p className="blue-pera1">Data verifiability evaluation </p>
                <p className="displayNone">
                  Benefit from our knowledge suite and processing tools that
                  evaluate the reliability of company data
                </p>
              </div>
            </div>
          </div>
          <div className="blue-sec2-bottom">
            <div className="blue-sec2-bottom-left blue-box">
              <img src="./images/OrangeTick.svg" alt="" />
              <div className="hover-div">
                <p className="blue-pera1">An End-to-End Solution</p>
                <p className="displayNone">
                  Streamline your deal close by digitally monitoring your
                  investment and fundraising process
                </p>
              </div>
            </div>
            <div className="blue-sec2-bottom-right blue-box">
              <img src="./images/OrangeTick.svg" alt="" />
              <div className="hover-div">
                <p className="blue-pera1">An End-to-End Solution</p>
                <p className="displayNone">
                  Streamline your deal close by digitally monitoring your
                  investment and fundraising process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .blue-theme {
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0px 100px 100px;
    background-image: url(images/BlueBgImage.png);
    margin-top: 20px;
    .blue-theme-sec1 {
      display: flex;
      justify-content: space-between;
      .img-div {
        .oldman-img {
          position: relative;
          bottom: 3%;
          width: 75%;
          object-fit: contain;
        }
      }
      .blue-sec1-right {
        display: flex;
        flex: 1 1 0%;
        justify-content: flex-end;
        margin-left: 10%;
        .blue-sec1-right-div {
          display: flex;
          flex-direction: column;
          margin-top: 120px;
          img {
            width: 26%;
            object-fit: contain;
          }
          h4 {
            font-family: Optima;
            font-size: 30px;
            line-height: 40px;
            letter-spacing: -0.03em;
            color: rgb(255, 255, 255);
            margin-top: 20px;
            width: 79%;
          }
          .pera1 {
            font-family: "Work Sans";
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            letter-spacing: -0.03em;
            color: rgb(135, 211, 255);
            margin-top: 10px;
            margin-left: 0;
          }
          .pera2 {
            font-family: "Work Sans";
            font-size: 12px;
            line-height: 28px;
            letter-spacing: -0.03em;
            color: rgb(135, 211, 255);
          }
        }
      }
    }
    .blue-theme-sec2 {
      margin-top: 10%;
      .blue-sec2-top {
        display: flex;
        justify-content: space-between;
        .blue-box {
          .hover-div {
            display: flex;
            flex-direction: column;
            .blue-pera1 {
              font-family: "Work Sans";
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 29px;
              color: rgba(255, 255, 255, 0.92);
              margin-left: 10%;
              width: 100%;
            }
            .displayNone {
              font-family: "Work Sans";
              display: none;
              margin-left: 10%;
              margin-top: 3%;
            }
          }
          &:hover {
            background-color: white;
            .hover-div {
              .blue-pera1 {
                color: black;
              }
              .displayNone {
                display: block;
              }
            }
          }
        }
        .blue-sec2-top-left {
          background-color: rgb(29, 45, 191);
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          width: 38%;
          border-radius: 6px;
          transition: linear 50ms ease 0s;
          padding: 10px 14px;
        }
        .blue-sec2-top-right {
          background-color: rgb(29, 45, 191);
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          width: 56%;
          border-radius: 6px;
          transition: linear 50ms ease 0s;
          padding: 10px 14px;
        }
      }

      .blue-sec2-bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 3%;
        .blue-box {
          .hover-div {
            display: flex;
            flex-direction: column;
            .blue-pera1 {
              font-family: "Work Sans";
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 29px;
              color: rgba(255, 255, 255, 0.92);
              margin-left: 10%;
              width: 100%;
            }
            .displayNone {
              font-family: "Work Sans";
              display: none;
              margin-left: 10%;
              margin-top: 3%;
            }
          }
          &:hover {
            background-color: white;
            .hover-div {
              .blue-pera1 {
                color: black;
              }
              .displayNone {
                display: block;
              }
            }
          }
        }
        .blue-sec2-bottom-left {
          background-color: rgb(29, 45, 191);
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          width: 52%;
          border-radius: 6px;
          transition: linear 50ms ease 0s;
          padding: 10px 14px;
        }
        .blue-sec2-bottom-right {
          background-color: rgb(29, 45, 191);
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          width: 45%;
          border-radius: 6px;
          transition: linear 50ms ease 0s;
          padding: 10px 14px;
        }
      }
    }
  }

  /* responsive section  */
  @media only screen and (max-width: 767px) {
    .blue-theme {
      padding: 0 45px 100px;
      .blue-theme-sec1 {
        .img-div {
          width: 60%;
        }
        .blue-sec1-right {
          margin-left: 0;
          .blue-sec1-right-div {
            h4 {
              font-size: 20px;
              line-height: 28px;
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .blue-theme {
      padding: 0px 40px 100px;
      .blue-theme-sec1 {
        width: 95%;
        flex-direction: column;
        .img-div {
          .oldman-img {
            width: 100%;
            top: -20px;
          }
        }
        .blue-sec1-right {
          margin-left: 0;
          .blue-sec1-right-div {
            margin-top: 0;
            margin-left: 25px;
            h4 {
              width: 100%;
            }
          }
        }
      }

      .blue-theme-sec2 {
        margin-top: 5%;
        .blue-sec2-top {
          flex-direction: column;
          .blue-sec2-top-left {
            width: 100%;
            margin: 6px 0;
          }
          .blue-sec2-top-right {
            width: 100%;
            margin: 6px 0;
          }
        }
        .blue-sec2-bottom {
          flex-direction: column;
          margin: 0;
          .blue-sec2-bottom-left {
            width: 100%;
            margin: 6px 0;
          }
          .blue-sec2-bottom-right {
            width: 100%;
            margin: 6px 0;
          }
        }
      }
    }
  }
`;
export default BlueTheme;
