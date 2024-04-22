import { Link } from 'react-router-dom';
import { PopupUser, SettingModal, UserLogoutModal } from 'components';
import { Logo } from 'components/Icons/Logo';
import {
  SignInText,
  HeaderContainer,
  UserLogoContainer,
  UserInfo,
} from './Header.styled';

import { UserIcon } from 'components/Icons/UserIcon';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
        {isLoggedIn && <PopupUser />}
        {/* <PopupUser /> */}
      </UserInfo>
      <SettingModal />
      <UserLogoutModal />
    </HeaderContainer>
  );
};
