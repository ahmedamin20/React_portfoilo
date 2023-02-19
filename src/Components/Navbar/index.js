import React from "react";
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
  LinkStyle
} from "./style.js";
const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <UlList>
          <ListItem>
            <LinkStyle to="/">Home</LinkStyle>
          </ListItem>
          <ListItem>
            <Anchor href="#">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">About</Anchor>
          </ListItem>
          <ListItem>
            <LinkStyle to="/contact">Contact</LinkStyle>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};
export default Navbar;
