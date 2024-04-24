import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Button = styled.button`
  background-color: ${props =>
    props.approve === 'true'
      ? theme.colors.secondaryRed
      : theme.colors.secondaryGrayBlue};
  color: ${props =>
    props.approve === 'true'
      ? theme.colors.primaryWhite
      : theme.colors.primaryBlue};
  align-items: center;
  display: inline-flex;
  justify-content: center;
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
  font-weight: ${theme.fontWeights.normal};
  padding: 8px 30px;
  border: none;
  border-radius: ${theme.radii.normal};
  width: 232px;
  box-shadow: ${theme.shadows.normalButton};
  &:hover {
    box-shadow: ${theme.shadows.hoverButton};
    transition: ${theme.transition.normal};
  }
  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    font-size: ${theme.fontSizes.listTitle};
    line-height: ${theme.lineHeights.info};
    width: 160px;
  }
`;
