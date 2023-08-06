import React from "react";
import BenefitHeading from "./BenefitHeading";
import BlueTheme from "./BlueTheme";
import GetStarted from "./GetStarted";
import MaskDiv from "./MaskDiv";
import WhyAxum from "./WhyAxum";

const Enabler = () => {
  return (
    <>
      <WhyAxum
        heading="CONFIDENCE WITH TRANSPARENCY"
        pera1="As an Enabler, your involvement drives the ecosystem on every level. By championing and accelerating new ventures, you lend them the verifiability and resources they need to break through."
        pera2="Through AXUM, these resources can include access to untapped financiers, partnership with homogenous companies, and cross-pollination across complementary portfolios."
        pera3="The platform’s Knowledge Suite uses your verified status and portfolio data to connect your organisation to a suitable network, and viable deal streams, while optimising your project processes."
        tempImg2="./images/Cash.png"
        tempImg5="./images/Circle.png"
        tempImg1="./images/Graph.png"
        tempImg4="./images/Cube.png"
        tempImg3="./images/File.png"
        line1Img1=""
        line1Img2="./images/TwoPeople.png"
        line1Img3=""
        line2Img1="./images/GirlEarphone.png"
        line2Img2=""
        line2Img3="./images/Coat.png"
        line2Img4="./images/MiddleCut.png"
        line3Img1=""
        line3Img2="./images/ManWithGlass.png"
        line3Img3=""
        line3Img4="./images/ManWithPhone.png"
      />
      <MaskDiv
        img="./images/EnaMaskGroup.png"
        heading="Broaden your portfolio’s reach, online and offline"
        // btn1="Investor"
        // btn2="Company"
        // btn3="Enabler"
        content1="Fast-tracking your portfolio companies is intensive and dynamic. AXUM’s digital technology and targeted physical interventions, supports digital gains that have real-world effects. Build your network and refine your processes within the platform, and impact the external market using our physical-digital approach."
      />
      <BlueTheme
        userImg="./images/EnaBlueSec.png"
        heading="The platform presents a unique opportunity to not only amplify the African investment ecosystem to the global community, but further accelerate inclusivity and representation of all African founders, particularly women founders who contribute immensely to the growth of the region."
        name="Pauline Koelbl"
        address="SheEquity"
      />
      <BenefitHeading
        heading="Digital deal flow management to support your portfolio"
        des="Beyond the verifiability of data, AXUM provides trustworthy and seamless digital streams that support the management of your portfolio. These functions can be accessed through an SAAS model or API."
      />
      <GetStarted
        img1="./images/InvPinkSec1.png"
        img2="./images/EnaPink2.png"
        img3="./images/EnaPink3.svg"
        img4="./images/EnaPink4.svg"
        des1="Register to join the AXUM platform"
        des2="Build your programme thesis and network"
        des3="View credible companies and gauge their impact"
        des4="Manage your portfolio’s interactions and global deals"
      />
    </>
  );
};

export default Enabler;
