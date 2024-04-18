import styled from 'styled-components';
const bgSignin1x = require('../../img/background/mobile/bg_signin@1x.png');
const bgSignin2x = require('../../img/background/mobile/bg_signin@2x.png');
const bgSigninDes1x = require('../../img/background/desktop/bg_signin@1x.png');
const bgSigninDes2x = require('../../img/background/desktop/bg_signin@2x.png');

export const SignInStyle = styled.div`
  display: flex;
  align-items: centre;
  height: -webkit-fill-available;
  position: relative;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    background-image: url(${bgSignin1x});
    background-size: cover;
  }

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    background-image: url(${bgSignin2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${bgSignin1x});
    picture {
      display: none;
    }
  }
  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    background-image: url(${bgSignin2x});
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${bgSigninDes1x});
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;
    background-size: cover, cover;
    display: flex;
    justify-content: center;
  }

  @media only screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    background-image: url(${bgSigninDes2x});
    background-size: cover;
    picture {
      display: none;
    }
  }
`;
