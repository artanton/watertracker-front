import styled from 'styled-components';
import { theme } from 'styles/theme';
const BottleImageDesctop1x = require('../../img/background/desktop/bottle_home@1x.png');
const BottleImageDesctop2x = require('../../img/background/desktop/bottle_home@2x.png');

export const WaterContainer = styled.div`
  @media (min-width: 768px) {
    padding-top: 16px;
  }

  @media only screen and (min-width: 1440px) {
    padding-top: 30px;
    display: flex;
    flex-direction: column;

    background-image: url(${BottleImageDesctop1x});
    background-size: 738px 548px;
    background-repeat: no-repeat;
    background-position: center top 5px;
  }

  @media only screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    only screen and (min-resolution: 192dpi) and (min-width: 1440px) {
    background-image: url(${BottleImageDesctop2x});
    background-size: 1476px 1096px;
    background-position: center, top 5px;
  }
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
