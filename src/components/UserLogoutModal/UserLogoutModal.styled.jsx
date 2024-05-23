import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Wrapper = styled.div`
  width: 280px;
  padding: 32px 24px;

  @media screen and (min-width: 768px) {
    width: 592px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: ${theme.fontWeights.normal};
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Subtitle = styled.p`
  font-size: ${theme.fontSizes.listTitle};
  margin-bottom: 24px;
  line-height: 20px;
  font-weight: ${theme.fontWeights.normal};
`;
