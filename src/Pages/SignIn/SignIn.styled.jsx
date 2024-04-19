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
  font-size: 18px;
  line-height: 1.33em;
  color: ${theme.colors.primaryBlack};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 11px 10px;
  line-height: 1.25em;
  border-radius: 6px;
  width: 100%;
  color: ${theme.colors.primaryBlue};
  border: 1px solid ${theme.colors.secondaryGray};
  font-family: inherit;
  position: relative;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.secondaryBlue};
    text-color: ${theme.colors.secondaryBlue};
  }

  ${props =>
    props.$error
      ? {
          color: 'red',
          borderColor: 'red',
          '&::placeholder': { color: 'red' },
        }
      : []}
`;
export const SignInTitle = styled.h2`
  font-size: 26px;
  margin: 0;
  line-height: 1.23em;
  font-weight: 500;
  color: ${theme.colors.primaryBlack};
`;

export const Error = styled.p`
  font-size: 14px;
  line-height: 1.28em;
  color: ${theme.colors.secondaryRed};
`;
export const Button = styled.button`
  width: 100%;
  height: 36px;
  padding: 8px 30px;
  border-radius: 10px;
  border: none;
  color: ${theme.colors.primaryWhite};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.33em;
  background-color: ${theme.colors.primaryBlue};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media screen and (min-width: 768px) {
    font-size: 18px;
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
  }
`;
