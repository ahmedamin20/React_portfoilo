import React, { useState, useEffect } from "react";
import {
  SocialMediaSection,
  SocialIcon,
  SocialP,
  Social,
  SocialSpan,
  SocialSpan2,
} from "./style";
import axios from "axios";
const SocialMedia = () => {
  const [social, setSocial] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSocial(res.data.social);
    });
  }, []);
  const socialData = social.map((socailItem) => {
    return (
      <Social background={socailItem.background}>
        <SocialIcon className={socailItem.icon}></SocialIcon>
        <SocialP>
          <SocialSpan>{socailItem.title}</SocialSpan>
          <SocialSpan2>{socailItem.body}</SocialSpan2>
        </SocialP>
      </Social>
    );
  });
  return <SocialMediaSection>{socialData}</SocialMediaSection>;
};
export default SocialMedia;
