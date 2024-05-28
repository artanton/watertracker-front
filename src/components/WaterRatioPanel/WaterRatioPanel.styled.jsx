import styled, { css } from 'styled-components';
import { glow, pulse, theme } from 'styles/theme';
import { PlusCircle } from 'components/Icons/PlusCircle';

export const WaterRatioContainer = styled.div`
  margin-top: 232px;

  @media (min-width: 768px) {
    margin-top: 326px;
    width: 704px;
    height: 90px;
    display: flex;
    align-items: center;
  }

  @media (min-width: 1440px) {
    margin-top: 466px;
    width: 592px;
  }
`;

export const PanelContainer = styled.div`
  height: 82px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 356px;
    height: 90px;
  }

  @media (min-width: 1440px) {
    width: 391px;
    height: 90px;
  }
`;

export const WaterToday = styled.h2`
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.listTitle};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlue};
  align-self: flex-start;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const ProgressBarContainer = styled.div`
  height: 14px;
  display: flex;
  align-items: center;
`;

export const StyledProgressBar = styled.input`
  margin-left: 11px;
  width: 256px;
  height: 8px;
  background-color: ${theme.colors.secondaryGrayBlue};
  border: none;
  border-radius: ${theme.radii.normal};
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;

  &::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background-color: ${theme.colors.primaryWhite};
    border: ${theme.border.normal};
    border-radius: ${theme.radii.round};
    -webkit-appearance: none;
    position: relative;
    z-index: 1;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background-color: ${theme.colors.primaryWhite};
    border: ${theme.border.normal};
    border-radius: ${theme.radii.round};
    -webkit-appearance: none;
    position: relative;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    border-radius: 5px;
    z-index: 0;
  }

  &::before {
    background-color: ${theme.colors.secondaryBlue};
    width: ${props => props.value}%;
    left: 0;
  }

  &::after {
    background-color: ${theme.colors.secondaryGrayBlue};
    width: ${props => 100 - props.value}%;
    right: 0;
  }

  @media (min-width: 768px) {
    width: 325px;
    height: 8px;
  }

  @media (min-width: 1440px) {
    width: 360px;
    height: 8px;
  }
`;

export const ProgressBarLabels = styled.div`
  margin-top: 16px;
  height: 20px;
  display: flex;
  width: 100%;
`;

export const ProgressBarLabel = styled.span`
  position: relative;
  font-size: ${theme.fontSizes.info};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlue};
  opacity: 1;
  transition: ${theme.transition.normal};
  cursor: default;
  text-align: center;

  ${props =>
    props.$position === '0%' &&
    css`
      font-size: ${props.$active === 'true' ? '16px' : '12px'};
      font-weight: ${props.$active === 'true' ? '500' : '400'};
      margin-right: 93px;
      width: 22px;
      @media (min-width: 768px) {
        margin-right: 127px;
      }
      @media (min-width: 1440px) {
        margin-right: 144px;
      }
    `}

  ${props =>
    props.$position === '50%' &&
    css`
      font-size: ${props.$active === 'true' ? '16px' : '12px'};
      font-weight: ${props.$active === 'true' ? '500' : '400'};
      margin-right: 88px;
      width: 50px;
      @media (min-width: 768px) {
        margin-right: 117px;
      }
      @media (min-width: 1440px) {
        margin-right: 135px;
      }
    `}

${props =>
    props.$position === '100%' &&
    css`
      font-size: ${props.$active === 'true' ? '16px' : '12px'};
      font-weight: ${props.$active === 'true' ? '500' : '400'};
      width: 30px;
      @media (min-width: 768px) {
        width: 40px;
      }
    `}


  /* Рисочки */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: ${theme.transform.translateX};
    width: 1px;
    height: 8px;
    background-color: ${theme.colors.secondaryGrayBlue};
  }
`;

export const AddWater = styled.button`
  width: 280px;
  height: 36px;
  border-radius: ${theme.radii.normal};
  background-color: ${theme.colors.primaryBlue};
  color: ${theme.colors.primaryWhite};
  border: none;
  box-shadow: ${theme.shadows.normalButton};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    box-shadow: ${theme.shadows.hoverButton};
    animation: ${pulse} 0.8s infinite, ${glow} 1.5s infinite;
  }

  &:active {
    cursor: pointer;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    width: 336px;
    height: 44px;
    border-radius: ${theme.radii.normal};
    margin-left: 12px;
  }

  @media (min-width: 1440px) {
    width: 178px;
    height: 44px;
    margin-left: 23px;
  }
`;

export const PlusIcon = styled(PlusCircle)`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: ${theme.colors.primaryWhite};
  fill: ${theme.colors.primaryWhite};
`;

export const AddWaterText = styled.p`
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.listTitle};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.primaryWhite};

  @media (min-width: 1440px) {
    font-size: ${theme.fontSizes.text};
  }
`;
