
import styled from "styled-components";
import { theme, glow, pulse } from "../../styles/theme";

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const GoolgleButton = styled.button`
  width: 100%;
  height: 36px;
  padding: 6px 32px;
  border-radius: ${theme.radii.normal};
  border: 1px solid ${theme.colors.primaryBlue};
  color: ${theme.colors.primaryBlue};
  font-size: ${theme.fontSizes.text};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.text};
  background-color: ${theme.colors.primaryWhite};
  box-shadow: ${theme.shadows.normalButton};
  &:hover {
    box-shadow: ${theme.shadows.hoverButton};
    animation: ${pulse} 0.8s infinite, ${glow} 1.5s infinite;
  }
  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.listTitle};
    height: 44px;
  }
`;