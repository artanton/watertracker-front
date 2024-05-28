import styled from 'styled-components';

const bgImageMob1x = require('../../img/background/mobile/bg_mainpage_bottle@1x.png');
const bgImageMob2x = require('../../img/background/mobile/bg_mainpage_bottle@2x.png');
const bgMainPageDesctop1x = require('../../img/background/desktop/bg_mainpage@1x.png');
const bgMainPageDesctop2x = require('../../img/background/desktop/bg_mainpage@2x.png');
const bgImageDesctop1x = require('../../img/background/desktop/bg_mainpage_bottle@1x.png');
const bgImageDesctop2x = require('../../img/background/desktop/bg_mainpage_bottle@2x.png');
const bgImageTablet2x = require('../../img/background/tablet/bg_mainpage_bottle@1x.png');
const bgImageTablet1x = require('../../img/background/tablet/bg_mainpage_bottle@2x.png');
const bgMainTablet1x = require('../../img/background/tablet/bg_mainpage@1x.png');
const bgMainTablet2x = require('../../img/background/tablet/bg_mainpage@2x.png');

export const LayoutStyle = styled.section`
  background-image: url(${bgImageMob1x});

  min-height: calc(100vh - 1px);
  background-attachment: fixed;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    background-image: url(${bgImageMob2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${bgMainTablet1x}), url(${bgImageTablet1x});
    background-repeat: no-repeat, no-repeat;
    background-position: bottom;
    background-size: cover, cover;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    background-image: url(${bgMainTablet2x}), url(${bgImageTablet2x});
  }
  @media only screen and (min-width: 1440px) {
    background-image: url(${bgImageDesctop1x}), url(${bgMainPageDesctop1x});
  }
  @media only screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    background-image: url(${bgImageDesctop2x}), url(${bgMainPageDesctop2x});
  }
`;

// import styled from 'styled-components';

// const bgBubblesMob1x = require('../../img/background/mobile/bg_mainpage_bottle@1x.png');
// const bgBubblesMob2x = require('../../img/background/mobile/bg_mainpage_bottle@2x.png');
// // const bgBubblesTablet1x = require('../../img/background/tablet/bg_mainpage@1x.png');
// // const bgBubblesTablet2x = require('../../img/background/tablet/bg_mainpage@2x.png');
// const bgBubblesDesctop1x = require('../../img/background/desktop/bg_mainpage@1x.png');
// const bgBubblesDesctop2x = require('../../img/background/desktop/bg_mainpage@2x.png');

// const bgBottleTablet1x = require('../../img/background/tablet/bg_mainpage_bottle@1x.png');
// const bgBottleTablet2x = require('../../img/background/tablet/bg_mainpage_bottle@2x.png');
// const bgBottleDesctop1x = require('../../img/background/desktop/bg_mainpage_bottle@1x.png');
// const bgBottleDesctop2x = require('../../img/background/desktop/bg_mainpage_bottle@2x.png');

// export const LayoutStyle = styled.section`
//   background-image: url(${bgBubblesMob1x});
//   background-repeat: no-repeat;
//   background-position: center bottom;
//   min-height: calc(100vh - 80px);

//   background-size: cover;
//   @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
//     background-image: url(${bgBubblesMob2x});
//   }

//   @media screen and (min-width: 768px) and (max-width: 1439px) {
//     background-image: url(${bgBottleTablet1x});
//     background-attachment: fixed;
//   }
//   @media screen and (min-width: 768px) and (max-width: 1439px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
//     background-image: url(${bgBottleTablet2x});
//     background-attachment: fixed;
//   }
//   @media only screen and (min-width: 1440px) {
//     background-image: url(${bgBottleDesctop1x}), url(${bgBubblesDesctop1x});
//     background-size: contain;
//   }
//   @media only screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
//     background-image: url(${bgBottleDesctop2x}), url(${bgBubblesDesctop2x});
//     background-size: contain;
//   }
// `;
