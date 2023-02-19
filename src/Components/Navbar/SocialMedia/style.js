import Styled from "styled-components";
export const SocialMediaSection = Styled.div`
height: auto;
    overflow: hidden;
    width:100%;
     
`
//     .social - media {
//         height: auto;
// overflow: hidden
// }
export const Social = Styled.div`
width: 33.33%;
float:Left;
box-sizing: border-box;
padding: 100px 0 100px 60px;
background:${props => props.background};
@media(max-width: 991px) {
    width: 100%;
    float: none;
}
`
//     .social - media.social {
//         width: 33.33 %;
// float: left;
// box - sizing: border - box;
// padding: 100px 0 100px 60px
// }


// .social - media.social.face {
//     background: #3b5998;
// }

// .social - media.social.twitter {
//     background: #498cbf;
// }

// .social - media.social.pin {
//     background: #cc2127;
// }

export const SocialIcon = Styled.i`
width: 50px;
height: 50px;
background: #fff;
text-align: center;
line-height: 50px;
color: #888;
float: left;
margin-top: 25px;
margin-right: 10px
}
`
// icon
//     width: 50px;
//     height: 50px;
//     background: #fff;
//     text - align: center;
//     line - height: 50px;
//     color: #888;
//     float: left;
//     margin - top: 25px;
//     margin - right: 10px
// }
export const SocialP = Styled.p`
font-weight: bold;
text-transform: uppercase;
font-size: 20px;
color: #fff;
float: left;
`
//     .social - media.social p {
//         font - weight: bold;
// text - transform: uppercase;
// font - size: 20px;
// color: #fff;
// float: left;

// }
export const SocialSpan = Styled.span`
display: block;
margin-bottom: 8px;
`
//     .social - media.social p span {
//         display: block;
// margin - bottom: 8px
// }
export const SocialSpan2 = Styled.span`
font-weight: normal;

`
//     .social - media.social p span.info2 {
//         font - weight: normal
// }

// @media(max - width: 991px) {
//     .social - media.social {
//         width: 100 %;
//         float: none;
//     }
// }