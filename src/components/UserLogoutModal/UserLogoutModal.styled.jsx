import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Wrapper = styled.div`
  background-color: ${theme.colors.primaryWhite};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 280px;
  padding: 32px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
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
  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
  line-height: 20px;
  font-weight: 500;
`;
