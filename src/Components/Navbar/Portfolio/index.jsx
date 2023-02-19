import React, { useState, useEffect } from "react";
import {
  PortfolioSection,
  PortfolioTitle,
  PortfolioTitleSpan,
  PortfolioUl,
  PortfolioListItem,
  ImgBox,
  Img,
  OverlayPart,
  OverlaySpan,
} from "./style..js";
import axios from "axios";
const Portfoilo = () => {
  const [images, setimages] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setimages(res.data.portfolio);
    });
  }, []);

  const imageItem = images.map((item) => {
    return (
      <ImgBox key={item.id}>
        <Img src={item.image} alt="" />
        <OverlayPart>
          <OverlaySpan>Show Image</OverlaySpan>
        </OverlayPart>
      </ImgBox>
    );
  });
  return (
    <PortfolioSection>
      <PortfolioTitle>
        <PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio
      </PortfolioTitle>
      <PortfolioUl>
        <PortfolioListItem active>All</PortfolioListItem>
        <PortfolioListItem>HTML</PortfolioListItem>
        <PortfolioListItem>Photoshop</PortfolioListItem>
        <PortfolioListItem>Wordpress</PortfolioListItem>
        <PortfolioListItem>Mobile</PortfolioListItem>
      </PortfolioUl>

      <div className="box">{imageItem}</div>
    </PortfolioSection>
  );
};
export default Portfoilo;
