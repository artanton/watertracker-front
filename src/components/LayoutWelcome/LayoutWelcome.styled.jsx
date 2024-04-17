import styled from 'styled-components';

const bgImageMob1x = require('../../img/background/mobile/bg_mainpage_bottle@1x.png');
const bgImageMob2x = require('../../img/background/mobile/bg_mainpage_bottle@2x.png');
// const bgMainPageMob1x = require('../../img/background/mobile/bg_home@1x.png');
// const bgMainPageMob2x = require('../../img//background/mobile/bg_home@2x.png');
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
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: cover, cover;
  padding-bottom: 40px;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    background-image: url(${bgImageMob2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-bottom: 50px;
    background-image: url(${bgMainTablet1x}), url(${bgImageTablet1x});
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;
    background-size: cover, cover;
    display: flex;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    padding-bottom: 50px;
    background-image: url(${bgMainTablet2x}), url(${bgImageTablet2x});
  }
  @media only screen and (min-width: 1440px) {
    background-image: url(${bgImageDesctop1x}), url(${bgMainPageDesctop1x});
  }
  @media only screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    background-image: url(${bgImageDesctop2x}), url(${bgMainPageDesctop2x});
  }
`;
