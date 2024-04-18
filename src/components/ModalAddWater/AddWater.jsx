import { Modal, CloseModalCross } from 'components';
import { modalNames } from 'constants/constants';

import { ModalContainer, ModalHeader, ModalTitle } from './AddWater.styled';

export const ModalAddWater = () => {
  return (
    <Modal modalId={modalNames.ADD_WATER}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Edit the entered amount of water</ModalTitle>
          <CloseModalCross />
        </ModalHeader>
      </ModalContainer>
    </Modal>
  );
};
