import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const WaterBenefitsContainer = styled.div`
  background-color: ${theme.colors.secondaryGray};
  padding: 24px 16px;
  border-radius: 10px;
  gap: 12px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
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
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1em;
  margin-bottom: 12px;
  margin-top: 0px;
`;
export const BenefitsList = styled.ul`
  padding-inline-start: 0px;
  margin: 0px;
`;
export const BenefitsLi = styled.li`
  display: flex;
  font-size: 16px;
  gap: 8px;
  align-items: center;
  line-height: 1.25em;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &::before {
    content: '';
    color: ${theme.colors.primaryBlue};
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
  }
`;
