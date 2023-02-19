import React from "react";
import {
  HomeSection,
  HomeInfo,
  HomeTitle,
  HomeTextInfo,
  ParagraphText,
  Span,
  Btn,
} from "./style.js";
const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInfo>
          <HomeTitle>Ahmed Amin</HomeTitle>
          <HomeTextInfo>Frontend Web Developer</HomeTextInfo>
          <ParagraphText>
            I'm a professional <Span>Frontend Web Developer </Span>
            creating modern and resposive Websites. Let us work together. Thank
            you.
          </ParagraphText>
          <Btn>Let's Begin</Btn>
        </HomeInfo>
      </div>
    </HomeSection>
  );
};
export default Home;
