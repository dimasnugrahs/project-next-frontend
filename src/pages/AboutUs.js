import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import QualityIconImage from "images/quality-icon.png";
import SafetyIconImage from "images/safety-icon.png";
import IntegrityIconImage from "images/integrity-icon.png";
import heroBackground from "../images/hero-background.jpg";
import mainImage from "../images/main-image.jpg";

const Subheading = tw.span`uppercase tracking-wider text-sm text-yellow-800`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Amerta</Subheading>}
        heading="We are a modern construction company."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc={heroBackground}
        description="Our mission is to build lasting relationships with our clients by providing exceptional construction services that exceed their expectations. We strive to be industry leaders in quality, innovation, and sustainability, contributing positively to the communities we serve."
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the future."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc={mainImage}
        textOnLeft={false}
        description="To be the construction company of choice known for our dedication to quality, innovative solutions, and a customer-centric approach, ultimately shaping a better and sustainable built environment"
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Build lasting relationships with our clients by providing exceptional construction services that exceed their expectations."
        cards={[
          {
            imageSrc: QualityIconImage,
            title: "Kualitas",
            description: "Kami memastikan semua produk kami memenuhi standar kualitas tertinggi."
          },
          {
            imageSrc: IntegrityIconImage,
            title: "Integritas",
            description: "Menjaga hubungan yang kuat dengan pelanggan melalui layanan yang handal dan transparan."
          },
          {
            imageSrc: SafetyIconImage,
            title: "Keamanan",
            description: "Memastikan semua material aman untuk digunakan dan sesuai dengan regulasi yang berlaku."
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
