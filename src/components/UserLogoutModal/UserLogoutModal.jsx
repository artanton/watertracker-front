import { useDispatch } from 'react-redux';
// import { selectIsLoading, selectError } from '../../redux/selectors';
import { apiLogoutUser } from '../../redux/authorization/authReducer';
import { Modal, CloseModalCross, YesNoButton } from 'components';
import { closeModal } from '../../redux/modal/modalSlice';
import { modalNames } from 'constants/constants';
import { Buttons, Wrapper, Title, Subtitle } from './UserLogoutModal.styled';

export const UserLogoutModal = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const onLogout = async e => {
    e.preventDefault();
    dispatch(apiLogoutUser());
    dispatch(closeModal());
  };
  return (
    <Modal modalId={modalNames.LOGOUT}>
      <Wrapper>
        <CloseModalCross />
        <Title>Log Out</Title>
        <Subtitle>Do you really want to leave?</Subtitle>
        <Buttons>
          <YesNoButton
            onBtnClick={() => dispatch(closeModal())}
            text="Cancel"
            approve={false}
          />

          <YesNoButton onBtnClick={onLogout} approve={true} text="Log out" />
        </Buttons>
      </Wrapper>
    </Modal>
  );
};
