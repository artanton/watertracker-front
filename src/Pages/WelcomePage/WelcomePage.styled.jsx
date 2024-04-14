import styled from 'styled-components';
const bgImageMob1x = require('../../img/Bgd-element-Home-screen-Mob1x.png');
const bgImageMob2x = require('../../img/Bgd-element-Home-screen-Mob2x.png');
const bgMainPageMob2x = require('../../img/Bgd-Main-Page-Mob1x.png');
const bgMainPageMob1x = require('../../img/Bgd-Main-Page-Mob2x.png');
const bgMainPageDesctop1x = require('../../img/Bgd-element-Main-Page-Desctop1x.png');
const bgMainPageDesctop2x = require('../../img/Bgd-element-Main-Page-Desctop2x.png');
const bgImageDesctop1x = require('../../img/Bgd-element-Main-Page-Desctop1x.png');
const bgImageDesctop2x = require('../../img/Bgd-element-Main-Page-Desctop2x.png');
const bgImageTablet2x = require('../../img/d-element-Home-Screen-Tablet2x.png');
const bgImageTablet1x = require('../../img/Bgd-element-Home-Screen-Tablet1x.png');
const bgMainTablet1x = require('../../img/Bgd-Main-Page-Tablet1x.png');
const bgMainTablet2x = require('../../img/Bgd-Main-Page-Tablet2x.png');

export const WrapperWelcomePg = styled.div`
  background-image: url(${bgMainPageMob1x}), url(${bgImageMob1x});
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: cover, cover;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-bottom: 50px;
    background-image: url(${bgMainTablet1x}), url(${bgImageTablet1x});
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;
    background-size: cover, cover;
  }

  @media only screen and (min-width: 1440px) {
    background-image: url(${bgImageDesctop1x}), url(${bgMainPageDesctop1x});
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;
    background-size: cover, cover;
    display: flex;
    justify-content: center;
  }
`;
//  background-image: url${bgMainPageMob1x}, url(${bgImageMob1x};
//background - image:min resolution 192dpi url(${ bgImageMob2x }, ${ bgMainPageMob2x });//

// background-image: url(${bgImageTablet1x} ${bgMainTablet1x}),
// url(${ bgImageDesctop2x }${ bgMainTablet2x });//

// background-image: url(${bgImageDesctop1x} ${bgMainPageDesctop1x}),
// url(${bgImageTablet2x}${bgMainPageDesctop2x});//
