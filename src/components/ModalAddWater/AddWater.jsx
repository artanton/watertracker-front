import { Modal, CloseModalCross } from 'components';
import { modalNames } from 'constants/constants';

import { ModalContainer, ModalHeader, ModalTitle } from './AddWater.styled';

export const ModalAddWater = () => {
  return (
    <Modal modalId={modalNames.ADD_WATER}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>
            Edit the entered amount of water Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Iure aliquam culpa aspernatur quo
            laudantium? Dolorem tempora rerum odio voluptates eveniet cum vitae
            incidunt perferendis? Nisi quisquam earum voluptas? Non, iste. Iure,
            excepturi vitae accusantium unde dolores, voluptate quas fuga at
            exercitationem dolorum sed laboriosam reprehenderit soluta! Itaque
            ex quia laborum amet, vero sit, aut quidem sint magni accusantium
            asperiores voluptates? Nihil dolor numquam, placeat ipsa consequatur
            animi excepturi debitis, accusamus soluta et quos quas amet id eaque
            eius recusandae officia aspernatur deleniti, quibusdam voluptate
            ullam unde voluptatibus earum exercitationem? Debitis.
          </ModalTitle>
          <CloseModalCross />
        </ModalHeader>
      </ModalContainer>
    </Modal>
  );
};
