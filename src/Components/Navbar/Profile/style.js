import Styled from "styled-components";
export const ProfileSection = Styled.div`
padding: 50px 0;
  overflow: hidden;
  width:85%;
  display:flex;
  justify-content: space-evenly;
  margin:1rem auto;
`
//   .profile_skills {
//     padding: 50px 0;
// overflow: hidden;
// }
export const ProfileDiv = Styled.div`
width: 45%;
display:flex;
justify-content:flex-start;
flex-direction:column;
padding:1rem;
`
//   .profile_skills.profile {
//     width: 50 %;
// float: left;
// }
export const SkillsTitle = Styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`
export const ProfileTitle = Styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  margin-right:60%;
`
export const ProfileUl = Styled.ul`
  list-style: none;
  display:flex;
  justify-content:flex-start;
  flex-direction:column;
  padding:0;
`
//   .profile_skills.profile.profile - list {
//     list - style: none;
// }
export const ProfileLi = Styled.li`
margin-bottom: 8px;
text-align:center;
display:flex;
  flex-wrap:nowrap;
  flex-direction:row;
`
//   .profile_skills.profile.profile - list.profile - item {
//     margin - bottom: 8px;
// }
export const ListItemSpan = Styled.span`
display: inline-block;
width: 100px;
font-weight: bold;
  margin-right:5rem;
color:${props => props.web ? '#eb5424' : ''};
font-weight:${props => props.web ? 'normal' : ''};
cursor:${props => props.web ? 'pointer' : ''};

`
//   .profile_skills.profile.profile - list.profile - item span {
//     display: inline - block;
// width: 100px;
// font - weight: bold;
// }

//   .profile_skills.profile.profile - list.profile - item span.web {
//     font - weight: normal;
// color: #eb5424;
// }
export const SkillsSection = Styled.div`
width: 45%;
float: left;
`
//   .profile_skills.skills {
//     width: 50 %;
// float: left;
// }
export const SkillsDesc = Styled.p`
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px;
`
//   .profile_skills.skills.skills - desc {
//     font - size: 15px;
// color: #888;
// line - height: 1.5;
// margin - bottom: 20px;
// }
export const DivBar = Styled.div`
overflow: hidden;
padding: 10px 0;
margin-bottom: 10px;
`
//   .profile_skills.skills.bar {
//     overflow: hidden;
// padding: 10px 0;
// margin - bottom: 10px;
// }
export const BarTitle = Styled.span`
float: left;
`
//   .profile_skills.skills.bar.title {
//     float: left;
// }
export const SkillPerc = Styled.span`
float: right;
`
//   .profile_skills.skills.bar.perc {
//     float: right;
//   margin-right: 100px;
// }
export const BarParent = Styled.div`
height: 2px;
clear: both;
background: #f8f8f8;
position: relative;
top: 5px;
`
//   .profile_skills.skills.bar.parent {
//     height: 2px;
// clear: both;
// background: #f8f8f8;
// position: relative;
// top: 5px;
// }
export const Bar = Styled.span`
background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width:${props => props.width}%;
`
//   .profile_skills.skills.bar.parent span {
//     background: #eb5424;
//     position: absolute;
//     display: block;
//     top: 0;
//     left: 0;
//     bottom: 0;
// }

//   .profile_skills.skills.bar.parent span.sp1 {
//     width: 100 %;
// }

// .profile_skills.skills.bar.parent span.sp2 {
//   width: 90 %;
// }

// .profile_skills.skills.bar.parent span.sp3 {
//   width: 80 %;
// }

// .profile_skills.profile.profile - title,
// .profile_skills.skills.skills - title {
//   font - size: 40px;
//   margin - bottom: 20px;
// }

// .profile_skills.profile.profile - title span,
// .profile_skills.skills.skills - title span {
//   font - weight: normal;
// }

// @media(max - width: 768px) {
//   .profile_skills.profile,
//   .profile_skills.skills {
//     width: 100 %;
//     float: none;
//   }
//   .profile_skills.profile {
//     margin - bottom: 20px;
//   }
// }
