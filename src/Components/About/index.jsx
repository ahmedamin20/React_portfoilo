import React from "react";
import {
  CreativeSection,
  CreativeInfo,
  InfoTitle,
  InfoSpan,
  InfoDir,
  InfoDesc,
  InfoDescAnchor,
} from "./style";
const About = () => {
  return (
    <CreativeSection>
      <div class="container">
        <CreativeInfo>
          <InfoTitle>
            <InfoSpan>This is</InfoSpan> Me
          </InfoTitle>
          <InfoDir>Creative Director</InfoDir>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <InfoDescAnchor href="#">explicabo</InfoDescAnchor> maxime quibusdam
            quaerat nihil aliquid aperiam deleniti, repellendus dolorum.
            Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </CreativeInfo>
      </div>
    </CreativeSection>
  );
};
export default About;
