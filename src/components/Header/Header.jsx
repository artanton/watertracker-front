import { Link } from 'react-router-dom';
import { PopupUser, SettingModal, UserLogoutModal } from 'components';
import { Logo } from 'components/Icons/Logo';
import {
  SignInText,
  HeaderContainer,
  UserLogoContainer,
  UserInfo,
  UserAvatar,
} from './Header.styled';

import { UserIcon } from 'components/Icons/UserIcon';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserData } from '../../redux/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  const userEmail = userData?.email ?? 'Sign in';
  const userEmailSplit = userEmail.split('@')[0];
  const userName = userData?.userName;
  const userAvatar = userData?.avatarURL;

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <UserInfo>
        <Link to="/signin">
          <UserLogoContainer>
            {/* <SignInText>Sign in</SignInText> */}
            {isLoggedIn ? (
              userName ? (
                <div>
                  <SignInText>{userName}</SignInText>
                </div>
              ) : (
                <div>{userEmailSplit}</div>
              )
            ) : (
              <SignInText>Sign in</SignInText>
            )}
            {isLoggedIn && userAvatar ? (
              <UserAvatar src={userAvatar} alt="userPhoto" />
            ) : (
              <UserIcon />
            )}

            {/* <UserIcon /> */}
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
