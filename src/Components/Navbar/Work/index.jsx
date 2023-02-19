import React, { Component } from "react";
import {
  WorkSection,
  WorkTitle,
  Span,
  WorkPart,
  Icon,
  WorkPratTitle,
  Line,
  ParagraphDesc,
} from "./style.js";
import axios from "axios";
class Work extends Component {
  state = {
    works: [],
  };
  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({ works: res.data.works });
    });
  }
  render() {
    const works = this.state.works;
    const worksList = works.map((workItem) => {
      return (
        <WorkPart first={workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <WorkPratTitle>{workItem.title}</WorkPratTitle>
          <Line />
          <ParagraphDesc>{workItem.body}</ParagraphDesc>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          {worksList}
        </div>
      </WorkSection>
    );
  }
}
export default Work;
