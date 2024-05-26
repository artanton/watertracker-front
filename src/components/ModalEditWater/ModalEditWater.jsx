import { useTranslation } from 'react-i18next';

import { Modal, CloseModalCross } from 'components';

import { modalNames } from 'constants/constants';

import { EditWaterForm } from './EditWaterForm/EditWaterForm';

import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalSubTitle,
} from 'components/ModalAddWater/AddWater.styled';

export const ModalEditWater = () => {
  const { t } = useTranslation();
  return (
    <Modal modalId={modalNames.EDIT_WATER}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{t('AddAndEditWaterCard.titleEdit')}</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
        <ModalSubTitle>{t('AddAndEditWaterCard.subtitleEdit')}</ModalSubTitle>
        <EditWaterForm />
      </ModalContainer>
    </Modal>
  );
};
