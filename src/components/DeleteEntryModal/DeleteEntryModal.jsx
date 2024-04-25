import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../../redux/selectors';
import { Modal, CloseModalCross, YesNoButton } from 'components';
import { closeModal } from '../../redux/modal/modalSlice';
import { selectModalData } from '../../redux/modal/modalSlice.selectors';
import { modalNames } from 'constants/constants';
import {
  Buttons,
  Wrapper,
  Title,
  Subtitle,
} from '../UserLogoutModal/UserLogoutModal.styled';
import { deleteWater } from '../../redux/waterData/thunk';

export const DeleteEntryModal = () => {
  const dispatch = useDispatch();
  const waterId = useSelector(selectModalData);
  console.log('waterId', waterId);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const onDelete = async e => {
    e.preventDefault();
    dispatch(deleteWater(waterId));
    dispatch(closeModal());
  };

  return (
    <Modal modalId={modalNames.DELETE_ENTRY}>
      <Wrapper>
        <CloseModalCross />
        <Title>Delete entry</Title>
        {error && <Subtitle>Error: {error}</Subtitle>}
        {!error && (
          <Subtitle>Are you sure you want to delete the entry?</Subtitle>
        )}
        <Buttons>
          <YesNoButton
            onBtnClick={() => dispatch(closeModal())}
            text="Cancel"
            approve="false"
            disabled={isLoading}
          />
          <YesNoButton
            onBtnClick={onDelete}
            approve="true"
            text="Delete"
            disabled={isLoading}
          />
          {isLoading && <span>Loading...</span>}
        </Buttons>
      </Wrapper>
    </Modal>
  );
};
