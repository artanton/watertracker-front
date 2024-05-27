import React from 'react';

import Popup from 'reactjs-popup';

import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import { modalNames } from 'constants/constants';
import { ArrowDown } from 'components/Icons/ArrowDown';
import { Settings } from 'components/Icons/Settings';
import { Logout } from 'components/Icons/Logout';
import {
  PopupButton,
  MenuContent,
  MenuButton,
  ButtonText,
  ButtonContent,
} from './PopupUser.styled';
export const PopupUser = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: 'auto',
        height: 'auto',
        padding: '16px',
        borderRadius: '10px',
        gap: '16px',
      }}
    >
      {close => (
        <MenuContent>
          <MenuButton
            type="button"
            onClick={() => {
              dispatch(openModal(modalNames.USER_SETTINGS));
              close();
            }}
          >
            <ButtonContent>
              <Settings />
              <ButtonText>{t('popup.setting')}</ButtonText>
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
              <ButtonText>{t('popup.logout')}</ButtonText>
            </ButtonContent>
          </MenuButton>
        </MenuContent>
      )}
    </Popup>
  );
};
