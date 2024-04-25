import { Modal, CloseModalCross } from 'components';
import { modalNames } from 'constants/constants';
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalSubTitle,
} from 'components/ModalAddWater/AddWater.styled';
import { EditWaterForm } from './EditWaterForm/EditWaterForm';

export const ModalEditWater = () => {
  return (
    <Modal modalId={modalNames.EDIT_WATER}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Edit the entered amount of water</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
        <ModalSubTitle>Correct entered data:</ModalSubTitle>
        <EditWaterForm />
      </ModalContainer>
    </Modal>
  );
};
