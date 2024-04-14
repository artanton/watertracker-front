import styled from 'styled-components';

export const WaterBenefitsContainer = styled.div`
  background-color: #ecf2ff;
  padding: 24px 16px;
  border-radius: 10px;
  gap: 12px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 32px 24px;
    width: 446px;
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
    color: #407bff;
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
  }
`;
