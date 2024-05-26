import { useTranslation } from 'react-i18next';

import { Modal, CloseModalCross, FormUserSettings } from 'components';
import { modalNames } from 'constants/constants';
import { ModalContainer, ModalTitle, ModalHeader } from './SettingModal.styled';

export const SettingModal = () => {
  const { t } = useTranslation();
  return (
    <Modal modalId={modalNames.USER_SETTINGS}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{t('UserSettings.UserSettingsTitle')}</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
        <FormUserSettings />
      </ModalContainer>
    </Modal>
  );
};
