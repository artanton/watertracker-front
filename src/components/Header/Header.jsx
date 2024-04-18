import { Link } from 'react-router-dom';
import { PopupUser } from 'components';
import { Logo } from 'components/Icons/Logo';
import { ModalUserSettings } from 'components';
import {
  SignInText,
  HeaderContainer,
  UserLogoContainer,
  UserInfo,
} from './Header.styled';

import { UserIcon } from 'components/Icons/UserIcon';

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <UserInfo>
        <Link to="/signin">
          <UserLogoContainer>
            <SignInText>Sign in</SignInText>
            <UserIcon />
          </UserLogoContainer>
        </Link>
        <PopupUser />
      </UserInfo>
      <ModalUserSettings />
    </HeaderContainer>
  );
};
