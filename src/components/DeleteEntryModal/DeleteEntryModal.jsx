import { useDispatch } from 'react-redux';
// import { selectIsLoading, selectError } from '../../redux/selectors';
import { Modal, CloseModalCross, YesNoButton } from 'components';
import { closeModal } from '../../redux/modal/modalSlice';
import { modalNames } from 'constants/constants';
import { Buttons, Wrapper, Title, Subtitle } from './UserLogoutModal.styled';

export const UserLogoutModal = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const onDelete = async e => {
    e.preventDefault();

    dispatch(closeModal());
  };
  return (
    <Modal modalId={modalNames.LOGOUT}>
      <Wrapper>
        <CloseModalCross />
        <Title>Delete entry</Title>
        <Subtitle>Are you sure you want to delete the entry?</Subtitle>
        <Buttons>
          <YesNoButton
            onBtnClick={() => dispatch(closeModal())}
            text="Cancel"
            approve={false}
          />

          <YesNoButton onBtnClick={onDelete} approve={true} text="Delete" />
        </Buttons>
      </Wrapper>
    </Modal>
  );
};
