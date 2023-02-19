import Styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarSection = Styled.div`
  padding: 5px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`

export const Logo = Styled.div` 
    width: 50%;
float: left;
// @media(max-width: 991px) {
//   {
//     width: 100 %;
//     float: none;
//   }
`

export const LogoText = Styled.h2` 
  font-size: 30px;
  font-weight: bold;
`
export const UlList = Styled.ul`
width: 50 %;
float: left;
list-style: none;
padding: 0;
// @media(max-width:911px){
//   width: 100 %;
//   float: none;
//   margin-top: 20px;
//   display: none;
// }
`
export const ListItem = Styled.li`
display:inline-block;
// @media(max-width: 991px) {
//   {
//     display: block;
//     text-align: center;
//   }

`

export const Anchor = Styled.a`
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font weight: bold;
transition: all .3s ease-in-out;
&:hover{
  color: #eb5424;
}
`
export const LinkStyle = Styled(Link)`
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font weight: bold;
transition: all .3s ease-in-out;

&:hover{
  color: #eb5424;
}
`

/* Media for Navbar Style */

// @media(max - width: 991px) {
//   .navbar.logo {
//     width: 100 %;
//     float: none;
//   }

//   .navbar.ul - list {
//     width: 100 %;
//     float: none;
//     margin - top: 20px;
//     display: none;
//   }

//   .navbar.ul - list.list - item {
//     display: block;
//     text - align: center;
//   }
// }
