import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Label = styled.label`
  font-size: 18px;
  line-height: calc(24 / 18);
  color: ;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;
export const SignUpTitle = styled.h2`
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

export const EmailInput = styled.input`
  font-size: 16px;
  padding: 11px 10px;
  line-height: 1.25em;
  border-radius: 6px;
  width: 100%;
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
  ${props =>
    props.$error
      ? {
          color: 'red',
          borderColor: 'red',
          '&::placeholder': { color: 'red' },
        }
      : null}
`;

export const PasswordInput = styled.input`
  font-size: 16px;
  padding: 11px 10px;
  line-height: 1.25em;
  border-radius: 6px;
  width: 100%;
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
  ${props =>
    props.$error
      ? {
          color: 'red',
          borderColor: 'red',
          '&::placeholder': { color: 'red' },
        }
      : null}
`;

export const RepeatPasswordInput = styled.input`
  font-size: 16px;
  padding: 11px 10px;
  line-height: 1.25em;
  border-radius: 6px;
  width: 100%;
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
  ${props =>
    props.$error
      ? {
          color: 'red',
          borderColor: 'red',
          '&::placeholder': { color: 'red' },
        }
      : null}
`;

export const Button = styled.button`
  width: 280px;
  height: 36px;
  padding: 8px 30px;
  border-radius: 10px;
  border: none;
  color: ${theme.colors.primaryWhite};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.33em;
  background-color: ${theme.colors.primaryBlue};
  font-family: @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 336px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;
export const SignUpForm = styled.form`
  gap: 16px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    margin-right: 104px;
  }
`;
