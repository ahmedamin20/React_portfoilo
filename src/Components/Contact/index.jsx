import React from "react";
import {
  DropSection,
  DropTitle,
  DropTitleSpan,
  DropForm,
  FormInput,
  InputDiv,
  TextArea,
} from "./style.js";
const Contact = () => {
  return (
    <DropSection>
      <div class="container">
        <DropTitle>
          <DropTitleSpan>Drop </DropTitleSpan>Me A line
        </DropTitle>
        <DropForm>
          <InputDiv>
            <FormInput type="text" placeholder="Your Name" />
            <FormInput type="email" placeholder="Your Email" />
          </InputDiv>
          <FormInput type="text" width="100" placeholder="Your Subject" />
          <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
          <FormInput type="submit" bnt="submit" value="Send Message" />
        </DropForm>
      </div>
    </DropSection>
  );
};
export default Contact;
