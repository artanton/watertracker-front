import React from 'react';
import Popup from 'reactjs-popup';

import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import { modalNames } from 'constants/constants';
import { ArrowDown } from 'components/Icons/ArrowDown';
import { PopupButton } from './PopupUser.styled';
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
    >
      {close => (
        <div>
          <button
            type="button"
            onClick={() => {
              dispatch(openModal(modalNames.USER_SETTINGS));
              close();
            }}
          >
            Settings
          </button>
        </div>
      )}
    </Popup>
  );
};
