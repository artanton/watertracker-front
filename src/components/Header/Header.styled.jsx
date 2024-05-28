import { styled } from 'styled-components';
import { theme } from 'styles/theme';

export const HeaderContainer = styled.header`
  margin: 0 auto;
  padding: 8px 20px 0;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 16px 32px 0;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 12px 112px 0;
  }
`;

export const UserLanguagesWrapper = styled.div`
  display: flex;
  gap: 2px;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserLogoContainer = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;

  & :nth-child(2) {
    margin-left: 8px;
  }

  & :nth-child(3) {
    margin-left: 4px;
  }

  &:hover > *,
  &:focus-within > * {
  }
`;

export const DefaultNeme = styled.p`
  text-transform: uppercase;
`;

export const SignInText = styled.p`
  color: ${theme.colors.primaryBlue};
  @media (min-width: 768px) {
    line-height: ${theme.lineHeights.info};
  }
`;

export const UserNameText = styled.p`
  color: ${theme.colors.primaryBlack};
  @media (min-width: 768px) {
    width: auto;
    line-height: 1.33;
  }
`;

export const UserAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  object-fit: cover;
`;
