import { Modal, CloseModalCross, FormUserSettings } from 'components';
import { modalNames } from 'constants/constants';
import { ModalContainer, ModalTitle, ModalHeader } from './SettingModal.styled';

export const SettingModal = () => {
  return (
    <Modal modalId={modalNames.USER_SETTINGS}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Settings</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
        <FormUserSettings />
      </ModalContainer>
    </Modal>
  );
};
