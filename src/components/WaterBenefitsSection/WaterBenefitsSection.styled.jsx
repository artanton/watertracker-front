import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const WaterBenefitsContainer = styled.div`
  background-color: ${theme.colors.secondaryGray};
  padding: 24px 16px;
  border-radius: ${theme.radii.normal};
  gap: 12px;
  box-shadow: ${theme.shadows.wrapper};
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 32px 24px;
    width: 494px;
    height: 332px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 34px;
  }
`;
export const WaterTitle = styled.h2`
  font-size: ${theme.fontSizes.listTitle};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.listTitle};
  margin-bottom: 12px;
  margin-top: 0px;
`;
export const BenefitsList = styled.ul`
  padding-inline-start: 0px;
  margin: 0px;
`;
export const BenefitsLi = styled.li`
  display: flex;
  font-size: ${theme.fontSizes.text};
  gap: 8px;
  align-items: center;
  line-height: ${theme.lineHeights.text};

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &::before {
    content: '';
    color: ${theme.colors.primaryBlue};
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: ${theme.radii.round};
  }
`;
