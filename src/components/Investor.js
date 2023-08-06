import React from "react";
import BenefitHeading from "./BenefitHeading";
import BlueTheme from "./BlueTheme";
import GetStarted from "./GetStarted";
import MaskDiv from "./MaskDiv";
import WhyAxum from "./WhyAxum";

const Investor = () => {
  return (
    <>
      <WhyAxum
        heading="BECOME A MARKET INSIDER"
        pera1="With globalisation, access to validated information about the African ecosystem and potential investment opportunities is key. The ability to verify information is especially critical for foreign entities."
        pera2="The AXUM Knowledge Suite evaluates a company’s eligibility and rationalises perceived risk to guide your investment steps. We make it easy for you to benefit from great opportunities."
        // pera3="We have also harnessed industry expertise to create a knowledge suite that scores every potential venture. This verifiability score analyses a company’s history, network, relationships, and reliability; thereby giving both novice and seasoned investors the AXUM edge."
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
        img="/images/Mask Group.png"
        heading="Access various offline services to strengthen your operations"
        // btn1="Investor"
        // btn2="Company"
        // btn3="Enabler"
        content1="We believe that bridging the digital world and the physical world provides a unique and interactive user experience. This ‘phygital’ combination empowers AXUM to use the best tools from both technology and targeted physical intervention to strengthen our members’ processes."
      />
      <BlueTheme
        userImg="./images/InvBlueSec.png"
        heading="The platform presents a unique opportunity to not only amplify the African investment ecosystem to the global community, but further accelerate inclusivity and representation of all African founders, particularly women founders who contribute immensely to the growth of the region."
        name="Luther Lawoyin"
        address="CEO & Founder, Pricepally"
      />
      <BenefitHeading
        heading="A digital deal flow for a seamless investment experience"
        des="Beyond the verifiability of the data, AXUM has a host of features to make your experience easy, informative, reliable, and seamless. All functionalities can be accessed directly through the SAAS model or API."
      />
      <GetStarted
        img1="./images/InvPinkSec1.png"
        img2="./images/InvPinkSec2.png"
        img3="./images/InvPinkSec3.png"
        img4="./images/InvPinkSec4.svg"
        des1="Register to join the AXUM platform"
        des2="Build your investment thesis and find complementary African companies"
        des3="Start managing your deal flow and shape your portfolio"
        des4="Endorse your portfolio companies and increase their verifiability"
      />
    </>
  );
};

export default Investor;
