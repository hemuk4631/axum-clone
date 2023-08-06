import React from "react";
import BenefitHeading from "./BenefitHeading";
import BlueTheme from "./BlueTheme";
import "./Home.css";
import MaskDiv from "./MaskDiv";
import RecentPitch from "./RecentPitch";
import WhyAxum from "./WhyAxum";
import BenefitSection from "./BenefitSection";
import UpcomingSection from "./UpcomingSection";
import RequestForm from "./RequestForm";

const Body = () => {
  return (
    <>
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
      <WhyAxum
        headingWidth={{ width: "100%" }}
        heading="WHY AXUM"
        pera1="Every investment journey begins with knowledge. For investors to digitally navigate and understand a novel ecosystem, the available information must be reliable and verifiable; transparency is currency."
        pera2="At AXUM, we use a double approach to bring you an informed layout of the investment ecosystem and provide data driven connections to advantageous opportunities. Investors can use the touch points in this extensive ‘map’ as a research base, or to anchor financial interest in the continent."
        pera3="We have also harnessed industry expertise to create a knowledge suite that scores every potential venture. This verifiability score analyses a company’s history, network, relationships, and reliability; thereby giving both novice and seasoned investors the AXUM edge."
        tempImg1="./images/Cash.png"
        tempImg2="./images/Circle.png"
        tempImg3="./images/Graph.png"
        tempImg4="./images/Cube.png"
        tempImg5="./images/File.png"
        line1Img1="./images/Green.png"
        line1Img2="./images/TwoPeople.png"
        line1Img3="./images/Sand.png"
        line2Img1="./images/GirlEarphone.png"
        line2Img2="./images/Ocean.png"
        line2Img3="./images/Coat.png"
        line2Img4="./images/MiddleCut.png"
        line3Img1="images/Wood.png"
        line3Img2="./images/ManWithGlass.png"
        line3Img3="./images/Flower.png"
        line3Img4="./images/ManWithPhone.png"
      />
      <BlueTheme
        userImg="./images/ManWithPC.png"
        heading="As an international investor, Axum’s digital solution gives me access to not only deals but ecosystem knowledge, which is exactly what I needed to begin my journey in investing in Africa."
        name="Thomas Knaack"
        address="Rotonda Office"
      />
      <BenefitHeading
        heading="Benefit from a seamless digital investment experience that connects you to scalable African companies"
        des="We allow investors from abroad to access investment opportunities in Africa, build their pipeline and access them with more accuracy by providing:"
      />

      <BenefitSection />

      <UpcomingSection />

      <RecentPitch />
      <RequestForm />
    </>
  );
};

export default Body;
