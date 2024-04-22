import React from 'react';
import Popup from 'reactjs-popup';

import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import { modalNames } from 'constants/constants';
import { ArrowDown } from 'components/Icons/ArrowDown';
import { Settings } from 'components/Icons/Settings';
import { Logout } from 'components/Icons/Logout';
import {
  PopupButton,
  MenuButton,
  ButtonText,
  ButtonContent,
} from './PopupUser.styled';
export const PopupUser = () => {
  const dispatch = useDispatch();

  const triggerComponent = open => (
    <PopupButton className="button">
      <ArrowDown />
    </PopupButton>
  );
  return (
    <Popup
      trigger={triggerComponent}
      position="bottom right"
      closeOnDocumentClick
      contentStyle={{
        width: '118px',
        height: '88px',
        padding: '16px',
        borderRadius: '10px',
        gap: '16px',
      }}
    >
      {close => (
        <div>
          <MenuButton
            type="button"
            onClick={() => {
              dispatch(openModal(modalNames.USER_SETTINGS));
              close();
            }}
          >
            <ButtonContent>
              <Settings />
              <ButtonText>Settings</ButtonText>
            </ButtonContent>
          </MenuButton>
          <MenuButton
            type="button"
            onClick={() => {
              dispatch(openModal(modalNames.LOGOUT));
              close();
            }}
          >
            <ButtonContent>
              <Logout />
              <ButtonText>Log Out</ButtonText>
            </ButtonContent>
          </MenuButton>
        </div>
      )}
    </Popup>
  );
};
