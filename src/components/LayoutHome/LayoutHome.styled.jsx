import styled from 'styled-components';

const bgHomePageMob1x = require('../../img/background/mobile/bg_home@1x.png');
const bgHomePageMob2x = require('../../img/background/mobile/bg_home@2x.png');
const BottleImageMob1x = require('../../img/background/mobile/bottle_home@1x.png');
const BottleImageMob2x = require('../../img/background/mobile/bottle_home@2x.png');

const bgHomePageTablet1x = require('../../img/background/tablet/bg_mainpage@1x.png');
const bgHomePageTablet2x = require('../../img/background/tablet/bg_mainpage@2x.png');
const BottleImageTablet1x = require('../../img/background/tablet/bottle_home@1x.png');
const BottleImageTablet2x = require('../../img/background/tablet/bottle_home@2x.png');

const bgHomePageDesctop1x = require('../../img/background/desktop/bg_mainpage@1x.png');
const bgHomePageDesctop2x = require('../../img/background/desktop/bg_mainpage@2x.png');

export const LayoutHomePage = styled.div`
  background-image: url(${BottleImageMob1x}), url(${bgHomePageMob1x});
  background-size: 280px 208px, cover;
  background-repeat: no-repeat;
  background-position: center top 82px, center top 28px;
  margin-top: 0;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi) {
    background-image: url(${BottleImageMob2x}), url(${bgHomePageMob2x});
    background-size: 280px 208px, cover;
    background-position: center 82px, center 28px;
  }

  /* Tablet */

  @media screen and (min-width: 768px) {
    background-image: url(${BottleImageTablet1x}), url(${bgHomePageTablet1x});
    background-size: 518px 386px, cover;
    background-repeat: no-repeat;
    background-position: center 16px, center 0;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${BottleImageTablet2x}), url(${bgHomePageTablet2x});
    background-size: 518px 386px, cover;
    background-position: center 16px, center 0;
  }

  /* Desktop */

  @media screen and (min-width: 1440px) {
    background-image: url(${bgHomePageDesctop1x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top 58px;
  }

  @media only screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    only screen and (min-resolution: 192dpi) and (min-width: 1440px) {
    background-image: url(${bgHomePageDesctop2x});
    background-size: cover;
    background-position: center top 58px;
  }
`;
