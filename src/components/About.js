import React from "react";
import BenefitHeading from "./BenefitHeading";
import BlueTheme from "./BlueTheme";
import GetStarted from "./GetStarted";
import MaskDiv from "./MaskDiv";
import WhyAxum from "./WhyAxum";

const About = () => {
  return (
    <>
      <WhyAxum
        heading="Every relationship, interaction, and investment within the ecosystem is synthesised by the AXUM engine."
        pera1="AXUM gives you verifiable information, a referential channel, and an aggregate score for potential ventures."
        pera2="On AXUM, the knowledge, access, and participation of existing players deepens, while new players benefit from the engine to evolve into active Endorsers"
        pera3="On AXUM deals do not define the platform, they happen because of it."
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
        heading="An intuitive and informed solution that guides your investment in
            Africa"
        btn1="Investor"
        btn2="Company"
        btn3="Enabler"
        content1="Axum is for the global investor a person that is interested in
            directing capital to African start ups and the next African success
            story."
        content2="Axum is for the African startups looking for funding to grow and build their business. Axum will offer the business and founder access to a knowledge suite that will allow them to become the next African success story."
        content3="Axum is for African ecosystem enablers, existing industry leaders, and founders that a looking build their network, validate a start up they work with or provide insight into how a start up can become the next African success story."
      />
      <BlueTheme
        userImg="./images/ComBlueSec.png"
        heading="As African founders, as we continue to grow and innovate it’s important to have access to a global community that can support us in achieving our ambitions and scaling internationally."
        name="Mark Mwangi"
        address="Amitruck"
      />
      <BenefitHeading heading="Use the AXUM Engine to" des="" />
      <GetStarted
        img1="./images/Globe.png"
        img2="./images/Setting.svg"
        img3="./images/PcMobile.svg"
        img4="./images/Calendar.png"
        des1="Investors - Inform your intuition with the right set of tools."
        des2="Enablers - Champion your companies, and amplify the impact of your programmes."
        des3="Companies - Increase trust in your venture and secure international investors."
        des4="Deals - Benefit from an elite yet accessible platform where transactions strengthen the ecosystem.s"
      />
    </>
  );
};

export default About;
