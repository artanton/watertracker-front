import { Modal, CloseModalCross, FormUserSettings } from 'components';
import { modalNames } from 'constants/constants';
import {
  ModalContainer,
  SettingsHeader,
  ModalHeader,
  UserSettings,
} from './ModalUserSettings.styled';

export const ModalUserSettings = () => {
  return (
    <Modal modalId={modalNames.USER_SETTINGS}>
      <ModalContainer>
        <ModalHeader>
          <SettingsHeader>Settings</SettingsHeader>
          <CloseModalCross />
        </ModalHeader>
      </ModalContainer>
      <UserSettings>
        <FormUserSettings />
      </UserSettings>
    </Modal>
  );
};
