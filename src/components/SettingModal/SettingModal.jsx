import { Modal, CloseModalCross, FormUserSettings } from 'components';
import { modalNames } from 'constants/constants';
import {
  ModalContainer,
  SettingsHeader,
  ModalHeader,
} from './SettingModal.styled';

export const SettingModal = () => {
  return (
    <Modal modalId={modalNames.USER_SETTINGS}>
      <ModalContainer>
        <ModalHeader>
          <SettingsHeader>Settings</SettingsHeader>
          <CloseModalCross />
        </ModalHeader>
        <FormUserSettings />
      </ModalContainer>
    </Modal>
  );
};
