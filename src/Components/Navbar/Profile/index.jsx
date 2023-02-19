import React, { useState, useEffect } from "react";
import {
  ProfileSection,
  ProfileDiv,
  SkillsTitle,
  ProfileUl,
  ProfileLi,
  ListItemSpan,
  SkillsSection,
  SkillsDesc,
  DivBar,
  BarTitle,
  SkillPerc,
  BarParent,
  Bar,
  ProfileTitle,
} from "./style.js";
import axios from "axios";
const Porfile = () => {
  // skills
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => setSkills(res.data.skills));
  }, []);
  const skillsPart = skills.map((skillitem) => {
    return (
      <DivBar key={skillitem.id}>
        <BarTitle>{skillitem.title}</BarTitle>
        <SkillPerc>{skillitem.percentage}%</SkillPerc>
        <BarParent>
          <Bar width={skillitem.percentage}></Bar>
        </BarParent>
      </DivBar>
    );
  });
  // profile
  const [Developer, setDeveloper] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => setDeveloper(res.data.developer));
  });
  const dataSec = Developer.map((dataItem) => {
    return (
      <ProfileUl key={dataItem.id}>
        <ProfileLi class="profile-item">
          <ListItemSpan>Name</ListItemSpan>
          {dataItem.name}
        </ProfileLi>
        <ProfileLi class="profile-item">
          <ListItemSpan>Birthday</ListItemSpan>
          {dataItem.BirthDate}
        </ProfileLi>
        <ProfileLi class="profile-item">
          <ListItemSpan>Address</ListItemSpan>
          {dataItem.Address}
        </ProfileLi>
        <ProfileLi class="profile-item">
          <ListItemSpan>Phone</ListItemSpan>
          {dataItem.phone}
        </ProfileLi>
        <ProfileLi class="profile-item">
          <ListItemSpan>Email</ListItemSpan>
          {dataItem.email}
        </ProfileLi>
        <ProfileLi class="profile-item">
          <ListItemSpan>Website</ListItemSpan>
          <ListItemSpan web>{dataItem.website}</ListItemSpan>
        </ProfileLi>
      </ProfileUl>
    );
  });
  return (
    <ProfileSection>
      <ProfileDiv>
        <ProfileTitle>My Profile</ProfileTitle>
        {dataSec}
      </ProfileDiv>

      <SkillsSection>
        <SkillsTitle>Some skills</SkillsTitle>
        <SkillsDesc>
          Lorem ipsum dolor sit amet, consectetur adipisicing et. Quos
          praesentium blanditiis esse cupiditate, omnis similique.
        </SkillsDesc>
        {skillsPart}
      </SkillsSection>
    </ProfileSection>
  );
};
export default Porfile;
