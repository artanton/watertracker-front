import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Wrap = styled.div`
  width: 100%;
  position: relative;

  button {
    display: flex;
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
  }
`;

export const Label = styled.label`
  font-size: ${theme.fontSizes.listTitle};
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlack};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const Input = styled.input`
  font-size: ${theme.fontSizes.text};
  padding: 11px 10px;
  line-height: ${theme.lineHeights.text};
  border-radius: 6px;
  width: 100%;
  color: ${theme.colors.primaryBlue};
  border: ${theme.border.secondary};
  font-family: inherit;
  position: relative;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.secondaryBlue};
  }

  ${props =>
    props.$error
      ? {
          color: theme.colors.secondaryRed,
          borderColor: theme.colors.secondaryRed,
          '&::placeholder': { color: theme.colors.secondaryRed },
        }
      : []}
`;
export const SignInTitle = styled.h2`
  font-size: ${theme.fontSizes.subtitle};
  margin: 0;
  line-height: ${theme.lineHeights.subtitle};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.primaryBlack};
`;

export const Error = styled.p`
  font-size: ${theme.fontSizes.info};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.secondaryRed};
`;
export const Button = styled.button`
  width: 100%;
  height: 36px;
  padding: 8px 30px;
  border-radius: ${theme.radii.normal};
  border: none;
  color: ${theme.colors.primaryWhite};
  font-size: ${theme.fontSizes.text};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.text};
  background-color: ${theme.colors.primaryBlue};
  box-shadow: ${theme.shadows.normalButton};
  &:hover {
    box-shadow: ${theme.shadows.hoverButton};
  }
  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.listTitle};
    height: 44px;
  }
`;
export const SignInForm = styled.form`
  gap: 16px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    margin-left: auto;
    margin-right: 140px;
    padding-top: 100px;
  }
`;

export const SignUpText = styled.span`
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlue};
  text-decoration: none;
  &:hover {
    color: ${theme.colors.secondaryOrange};
    transition: ${theme.transition.normal};
  }
`;
