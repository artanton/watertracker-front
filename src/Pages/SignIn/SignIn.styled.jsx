import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Styled = styled.div`
  position: relative;
  width: 100%;
  button {
    display: flex;
    position: absolute;
    right: -10px;
    top: 70%;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
  }
  @media screen and (min-width: 768px) {
    button {
      right: 40px;
    }
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Label = styled.label`
  font-size: 18px;
  line-height: calc(24 / 18);
  color: ;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  gap: 8px;
  width: 100%;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 11px 10px;
  line-height: 1.25em;
  border-radius: 6px;
  width: 280px;
  color: ${theme.colors.primaryAccent};
  border: 1px solid ${theme.colors.secondaryGray};
  font-family: inherit;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.secondaryBlue};
  }
  &:not(:placeholder-shown):invalid {
    color: ${theme.colors.secondaryRed};
    border-color: ${theme.colors.secondaryRed};
  }
  &::before {
  }
  ${props =>
    props.$error
      ? {
          color: 'red',
          borderColor: 'red',
          '&::placeholder': { color: 'red' },
        }
      : null}
`;
export const SignInTitle = styled.h2`
  font-size: ;
  line-height: 1.23em;
  font-weight: 500;
  color: ;
`;

export const Error = styled.p`
  font-size: 14px;
  line-height: 1.28em;
  color: ${theme.colors.secondaryRed};
`;
export const Button = styled.button`
  width: 276px;
  height: 36px;
  padding: 8px 30px;
  border-radius: 10px;
  border: none;
  color: ${theme.colors.primaryWhite};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.33em;
  background-color: ${theme.colors.primaryBlue};
  @media screen and (min-width: 768px) {
    font-size: 18px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;
export const SignInForm = styled.form`
  gap: 16px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-right: auto;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    margin-left: auto;
  }
`;
