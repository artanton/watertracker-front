import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Button = styled.button`
  background-color: ${props =>
    props.approve ? theme.colors.secondaryRed : theme.colors.secondaryGray};
  color: ${props =>
    props.approve ? theme.colors.primaryWhite : theme.colors.primaryBlue};
  align-items: center;
  display: inline-flex;
  justify-content: center;
  font-size: 16px;
  line-height: 1.25em;
  font-weight: 500;
  padding: 8px 30px;
  border: none;
  border-radius: 10px;
  width: 232px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33em;
    width: 160px;
  }
`;
