import { Logo } from 'components/Icons/Logo';
import { Link } from 'react-router-dom';
import {
  SignInText,
  HeaderContainer,
  UserLogoContainer,
} from './Header.styled';

import { UserIcon } from 'components/Icons/UserIcon';

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/signin">
        <UserLogoContainer>
          <SignInText>Sign in</SignInText>
          <UserIcon />
        </UserLogoContainer>
      </Link>
    </HeaderContainer>
  );
};
