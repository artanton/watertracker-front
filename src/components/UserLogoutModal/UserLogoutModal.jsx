import { useDispatch } from 'react-redux';
// import { selectIsLoading, selectError } from '../../redux/selectors';
import { apiLogoutUser } from '../../redux/authorization/authReducer';
import { Modal, CloseModalCross, YesNoButton } from 'components';
import { closeModal } from '../../redux/modal/modalSlice';
import { modalNames } from 'constants/constants';

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
      <div>
        <CloseModalCross />
        <h2>Log Out</h2>
        <p>Do you really want to leave?</p>
        <YesNoButton
          onBtnClick={() => dispatch(closeModal())}
          text="Cancel"
          approve={false}
        />

        <YesNoButton onBtnClick={onLogout} approve={true} text="Log out" />
      </div>
    </Modal>
  );
};
