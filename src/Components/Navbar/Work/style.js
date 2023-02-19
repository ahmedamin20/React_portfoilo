import Styled from "styled-components";
export const WorkSection = Styled.div`
  height: auto;
  padding: 50px 0;
  overflow: hidden;
  background: #fff;
`

export const WorkTitle = Styled.h2` 
    font-size: 60px;
`

export const Span = Styled.span`
  font-weight: normal;
`

export const WorkPart = Styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  margin-left: 5%;
  margin-left:${props => props.first === 1 ? '0' : '5%'};
  @media(min-width: 576px) and (max-width: 768px) {
    width: 47 %;

  }
  @media(max-width: 575px) {
  width: 100 %;
  float: none;
  margin-left: 0;
    
  }

`
export const Icon = Styled.i`
  color: #888;
  margin-bottom: 20px;
`

export const WorkPratTitle = Styled.h4`
  font-size: 25px;
  color: #eb5424;
  margin-bottom: 20px;
`

export const Line = Styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
`

export const ParagraphDesc = Styled.p`
  font-size: 14px;
  color: #888;
  padding: 20px;
`

  // @media(max - width: 575px) {
  //   .work.part {
  //     width: 100 %;
  //     float: none;
  //     margin - left: 0;
  //   }
  // }

  // @media(min - width: 576px) and(max - width: 768px) {
  //   .work.part {
  //     width: 47 %;
  //   }

//   .work.last {
//     margin - left: 0;
// }
// }
