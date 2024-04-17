import styled, { css } from 'styled-components';
import { theme } from 'styles/theme';
import { Plus } from 'components/Icons/Plus/Plus';

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
  align-items: center;

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
`;

export const StyledProgressBar = styled.input`
  width: 256px;
  height: 8px;
  background-color: rgba(215, 227, 255, 1);
  border: none;
  border-radius: 10px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;

  &::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(64, 123, 255, 1);
    border-radius: 50%;
    -webkit-appearance: none;
    position: relative;
    z-index: 1;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(64, 123, 255, 1);
    border-radius: 50%;
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
    background-color: rgba(158, 187, 255, 1); /* Колір прогресу */
    width: ${props => props.value}%; /* Встановлюємо ширину прогресу */
    left: 0; /* Розміщуємо прогрес зліва від повзунка */
  }

  &::after {
    background-color: rgba(215, 227, 255, 1); /* Колір залишкової частини */
    width: ${props =>
      100 - props.value}%; /* Встановлюємо ширину залишкової частини */
    right: 0; /* Розміщуємо залишкову частину справа від повзунка */
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
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ProgressBarLabel = styled.span`
  font-size: ${theme.fontSizes.info};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlue};
  opacity: 1;
  transition: transform 0.3s ease;
  cursor: default;

  ${props =>
    props.position === '0%' &&
    css`
      font-size: ${props.active === 'true' ? '16px' : '12px'};
      font-weight: ${props.active === 'true' ? '500' : '400'};
    `}

  ${props =>
    props.position === '50%' &&
    css`
      font-size: ${props.active === 'true' ? '16px' : '12px'};
      font-weight: ${props.active === 'true' ? '500' : '400'};
    `}
&::before,
  &::after {
    width: 8px;
    background-color: #d7e3ff;
  }
`;

export const PlusIcon = styled(Plus)`
  width: 16px;
  height: 16px;
  margin: 0;
  margin-right: 8px;
  font-size: 18px;
  line-height: 24px;
`;

export const AddWater = styled.button`
  width: 280px;
  height: 36px;
  border-radius: 10px;
  background-color: ${theme.colors.primaryBlue};
  border: none;
  color: ${theme.colors.primaryWhite};
  box-shadow: ${theme.shadows.normalButton};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    box-shadow: ${theme.shadows.hoverButton};
  }

  &:active {
    cursor: pointer;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    width: 336px;
    height: 44px;
    border-radius: 10px;
    margin-left: 12px;
  }

  @media (min-width: 1440px) {
    width: 178px;
    height: 44px;
    margin-left: 23px;
  }
`;

// svg {
//   stroke: ${({ props }) => props.theme.colors.primaryWhite};
//   margin: 0;
//   border: solid 2px ${({ props }) => props.theme.colors.primaryWhit};
//   border-radius: 50%;
// }

// svg {
//     stroke: ${({ props }) => props.theme.colors.secondaryOrange};
//     margin: 0;
//     border: solid 2px ${({ props }) => props.theme.colors.secondaryOrange};
//   }
// }
