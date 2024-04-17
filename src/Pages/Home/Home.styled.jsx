import styled from 'styled-components';
import { theme } from 'styles/theme';

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
const BottleImageDesctop1x = require('../../img/background/desktop/bottle_home@1x.png');
const BottleImageDesctop2x = require('../../img/background/desktop/bottle_home@2x.png');

export const WrapperHomePage = styled.div`
  background-image: url(${BottleImageMob1x}), url(${bgHomePageMob1x});
  background-size: 280px 208px, cover;
  background-repeat: no-repeat, no-repeat;
  background-position: center 105px, center 50px;

  @media only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi) {
    background-image: url(${BottleImageMob2x}), url(${bgHomePageMob2x});
    background-size: 560px 416px, cover;
    background-position: center 105px, center 50px;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${BottleImageTablet1x}), url(${bgHomePageTablet1x});
    background-size: 518px 386px, cover;
    background-repeat: no-repeat, no-repeat;
    background-position: center 20px, center 0;
  }

  @media only screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    only screen and (min-resolution: 192dpi) and (min-width: 768px) {
    background-image: url(${BottleImageTablet2x}), url(${bgHomePageTablet2x});
    background-size: 1036px 772px, cover;
    background-position: center 20px, center 0;
  }

  @media only screen and (min-width: 1440px) {
    background-image: url(${BottleImageDesctop1x}), url(${bgHomePageDesctop1x});
    background-size: 738px 548px, contain;
    background-repeat: no-repeat, no-repeat;
    background-position: top 25px left 40px, center 60px;
    justify-content: center;
    display: flex;
  }

  @media only screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    only screen and (min-resolution: 192dpi) and (min-width: 1440px) {
    background-image: url(${BottleImageDesctop2x}), url(${bgHomePageDesctop2x});
    background-size: 1476px 1096px, contain;
    background-position: top 70px left 40px, center 20%;
    justify-content: center;
    display: flex;
    margin-top: 22px;
  }
`;

export const DesktopContainer = styled.div`
  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ListContainer = styled.div`
  width: 280px;
  height: 836px;
  border: none;
  border-radius: 10px;
  background: ${theme.colors.secondaryGray};
  padding: 24px 8px;
  box-shadow: ${theme.shadows.wrapper};
  margin-top: 40px;

  @media (min-width: 768px) {
    width: 704px;
    height: 688px;
    padding: 32px 24px;
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    width: 592px;
    height: 680px;
    margin-top: 0;
  }
`;
