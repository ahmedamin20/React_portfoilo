import Styled from "styled-components"
export const DropSection = Styled.div`
padding: 50px 0;
text-align: center;
`
//   .drop {
//     padding: 50px 0;
// text - align: center;
// }
export const DropTitle = Styled.h2`
font-size: 60px;
margin-bottom: 30px;
`
//   .drop.drop - title {
//     font - size: 60px;
// margin - bottom: 30px;
// }
export const DropTitleSpan = Styled.span`
font-weight: normal;

`
//   .drop.drop - title span {
//     font - weight: normal;
// }
export const DropForm = Styled.form`
width: 70%;
margin: auto;
`
//   .drop form {
//     width: 70 %;
// margin: auto;
// }
export const FormInput = Styled.input`
box-sizing: border-box;
outline: 0;
padding: 5px;
margin-bottom: 10px;
width: ${props => props.width === "100" ? "100%" : "49%" && props.btn === "submit" ? "60%" : "49%"};
backgorund:${props => props.btn === "sumit" ? "#fff" : ""};
border:${props => props.btn === "sumit" ? "1px solid #ccc" : ""};
color:${props => props.btn === "sumit" ? "#888" : ""};
float:${props => props.type === "text" ? "left" : "right" && props.btn === "submit" ? "" : ""};
cursor:${props => props.btn === "sumit" ? "pointer" : ""};
`
//   .drop form input {
//     box - sizing: border - box;
// outline: 0;
// padding: 5px;
// margin - bottom: 10px;
// }
export const InputDiv = Styled.div`
overflow: hidden;

`
//   .drop form.form - input {
//   overflow: hidden;
// }

//   .drop form.form - input input {
//   width: 49 %;
// }

//   .drop form.form - input input[type = "text"] {
//   float: left;
// }

// .drop form.form - input input[type = "email"] {
//   float: right;
// }

//   .drop form input.sub {
//     width: 100%;
// }
export const TextArea = Styled.textarea`
width: 100%;
outline: 0;
background: #ccc;
`
//   .drop form textarea {
//     width: 100 %;
// outline: 0;
// background: #ccc;
// }

//   .drop form input[type = "submit"] {
//     width: 60 %;
// background: #fff;
// border: 1px solid #ccc;
// color: #888;
// cursor: pointer;
// }

// @media(max - width: 575px) {
//   .drop.drop - title {
//     font - size: 40px;
//   }

//   .drop form.form - input input {
//     width: 100 %;
//   }

//   .drop form {
//     width: 90 %;
//   }
// }

// /*
//     ===============================
//             Drop Styles
//     ===============================
// */

// .footer {
//   text - align: center;
//   padding: 10px 0;
// }

// .footer p {
//   color: #888;
// }

// /*


// // Extra small devices (portrait phones, less than 576px)
// @media (max-width: 575px) { ... }

// // Small devices (landscape phones, less than 768px)
// @media (max-width: 767px) { ... }

// // Medium devices (tablets, less than 992px)
// @media (max-width: 991px) { ... }

// // Large devices (desktops, less than 1200px)
// @media (max-width: 1199px) { ... }
// */
