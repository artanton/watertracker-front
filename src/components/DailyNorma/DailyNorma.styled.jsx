import styled from 'styled-components';
import { theme } from 'styles/theme';

export const MyDailyNormaContainer = styled.div`
  width: 164px;
  max-height: 74px;
  border: 1px solid #ecf2ff;
  border-radius: ${theme.radii.normal};
  box-shadow: ${theme.shadows.normaFrame};
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    max-height: 76px;
  }

  @media (min-width: 1440px) {
    width: 166px;
    max-height: 76px;
  }
`;

export const MyDailyNorma = styled.h2`
  font-weight: 500;
  font-size: ${theme.fontSizes.listTitle};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlack};
  margin: 0;
  text-align: center;
  margin-bottom: 12px;
`;

export const MyDailyNormaAmount = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding-left: 20px;
  height: 22px;
`;

export const WaterNormaAmount = styled.h2`
  font-weight: ${theme.fontWeights.bold};
  font-size: 24px;
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlue};
  margin: 0;
`;

export const WaterNormaAmountEdit = styled.button`
  font-weight: ${theme.fontWeights.regular};
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
  border: none;
  background: none;
  color: #8baeff;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const BottleImage = styled.img`
  margin-top: 8px;
`;
