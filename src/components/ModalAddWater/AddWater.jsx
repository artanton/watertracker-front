import { useTranslation } from 'react-i18next';

import { Modal, CloseModalCross } from 'components';
import { AddWaterForm } from './AddWaterForm/AddWaterForm';

import { modalNames } from 'constants/constants';

import {
  ModalContainer,
  ModalHeader,
  ModalSubTitle,
  ModalTitle,
} from './AddWater.styled';

export const ModalAddWater = () => {
  const { t } = useTranslation();
  return (
    <Modal modalId={modalNames.ADD_WATER}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{t('AddAndEditWaterCard.titleAdd')}</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
        <ModalSubTitle>{t('AddAndEditWaterCard.subtitleAdd')}</ModalSubTitle>
        <AddWaterForm />
      </ModalContainer>
    </Modal>
  );
};
