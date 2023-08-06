import React from "react";
import BenefitHeading from "./BenefitHeading";
import BlueTheme from "./BlueTheme";
import GetStarted from "./GetStarted";
import MaskDiv from "./MaskDiv";
import WhyAxum from "./WhyAxum";

const Company = () => {
  return (
    <>
      <WhyAxum
        heading="TRUST & VERFIABILITY"
        pera1="AXUM will increase the verifiability of your company’s data to boost trust in your organisation and generate more opportunities for pitching, funding, and growth. Investors will use your profile score to gauge your performance, and their level of interest in your company."
        pera2="Your company can, in turn, view any investor’s digital outlook and use the SAAS or API functions to find your perfect match."
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
        img="./images/ComMaskGroup.png"
        heading="Find your network with us and make connections that transcend the digital world"
        // btn1="Investor"
        // btn2="Company"
        // btn3="Enabler"
        content1="Our digital platform is designed to foster offline relationships and business opportunities. AXUM’s smart features can help new organisations carve out their own space in the market and build a community of peers. In different strokes, these functionalities give existing companies a means to amplify their work and broaden their reach, both online and offline, ultimately giving all member companies a full-circle experience."
      />
      <BlueTheme
        userImg="./images/ComBlueSec.png"
        heading="As African founders, as we continue to grow and innovate it’s important to have access to a global community that can support us in achieving our ambitions and scaling internationally."
        name="Mark Mwangi"
        address="Amitruck"
      />
      <BenefitHeading
        heading="International fundraising through digital deal flows"
        des="AXUM provides various functionalities that allow you to manage your data room remotely, correspond with potential investors, collaborate with other African ventures, and seal deals; all in one seamless flow."
      />
      <GetStarted
        img1="./images/InvPinkSec1.png"
        img2="./images/ComPink2.svg"
        img3="./images/ComPink3.png"
        img4="./images/ComPink4.svg"
        des1="Register to join the AXUM platform"
        des2="Build your company profile and find complementary investor"
        des3="Start managing your deal flow and shape your ecosystem"
        des4="Get endorsed by investors and Ecosystem Enablers and increase your verifiability"
      />
    </>
  );
};

export default Company;
