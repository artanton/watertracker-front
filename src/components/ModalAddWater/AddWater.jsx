import { Modal, CloseModalCross } from 'components';
import { modalNames } from 'constants/constants';
import { AddWaterForm } from './AddWaterForm/AddWaterForm';

import {
  ModalContainer,
  ModalHeader,
  ModalSubTitle,
  ModalTitle,
} from './AddWater.styled';

export const ModalAddWater = () => {
  return (
    <Modal modalId={modalNames.ADD_WATER}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Add water</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
        <ModalSubTitle>Choose a value:</ModalSubTitle>
        <AddWaterForm />
      </ModalContainer>
    </Modal>
  );
};
