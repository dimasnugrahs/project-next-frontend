import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import ProductGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import TabCardGrid from "components/cards/TabCardGrid.js";



export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium text-yellow-800`;
  const HighlightedText = tw.span`bg-yellow-800 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  // TODO
  // 1. Panggil component yang harusnya ada di halaman ini
  // 2. Modifikasi styling dan value property yang dimiliki component

  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Membangun{" "}
            <HighlightedText>dengan Kualitas.</HighlightedText>
          </>
        }
        description="Amerta Solutions adalah perusahaan terkemuka dalam penyediaan material bangunan berkualitas tinggi di Indonesia. Kami berkomitmen untuk mendukung proyek konstruksi dengan menyediakan bahan-bahan terbaik yang sesuai dengan standar internasional."
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Find Something Big"
        watchVideoButtonText="Our Company"
      />

      <MainFeature
        subheading={<Subheading>Estabilished Since 2000</Subheading>}
        heading={
          <>
          Melayani Anda
          <wbr /> <HighlightedText>lebih dari 24 years.</HighlightedText>
          </>
        }
        description= {
          <Description>
            Dengan pengalaman lebih dari 24 tahun, kami berspesialisasi dalam memberikan bahan proyek konstruksi berkualitas tinggi di berbagai sektor, termasuk perumahan, komersial, industri, dan infrastruktur.
          </Description>
        }
        
        buttonRounded={false}

        textOnLeft={false}
        primaryButtonText="Best Offer"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-12 md:w-32 md:h-32 opacity-25`}
      
      />

      <ProductGrid
        heading={
          <>
          Lihat
          <wbr /> <HighlightedText>Produk Terbaik.</HighlightedText>
          </>
        }
      ></ProductGrid>

      <Features
        heading={
          <>
          Servis Unggulan
          <wbr /> <HighlightedText></HighlightedText>
          </>
        }
      ></Features>

      <MainFeature2
        subheading={<Subheading>Ours</Subheading>}
        heading={
          <>
          Tentang
          <wbr /> <HighlightedText>Amerta Solution?</HighlightedText>
          </>
        }
        description= {
          <Description>
            Kami telah berhasil menyelesaikan berbagai proyek yang menjadi bukti kemampuan dan komitmen kami terhadap keunggulan. Dari kompleks perumahan hingga bangunan komersial, setiap proyek menunjukkan dedikasi kami terhadap kualitas dan inovasi.
          </Description>
        }
        
      ></MainFeature2>

      <Testimonial
        heading={
          <>
          Testimonials
          <wbr /> <HighlightedText>Pelanggan Kami.</HighlightedText>
          </>
        }
      ></Testimonial>

      <DownloadApp
        text={
          <>
            People around you are ordering delicious meals using the{" "}
            <HighlightedTextInverse>Treact App.</HighlightedTextInverse>
          </>
        }
      />
      <Footer background={"bg-gray-200"} />
    </AnimationRevealPage>
  );
};
