import { useDispatch } from 'react-redux';
// import { selectIsLoading, selectError } from '../../redux/selectors';
import { apiLogoutUser } from '../../redux/authorization/authReducer';
import { Modal, CloseModalCross, YesNoButton } from 'components';
import { closeModal } from '../../redux/modal/modalSlice';
import { modalNames } from 'constants/constants';
import { Buttons, Wrapper, Title, Subtitle } from './UserLogoutModal.styled';
import { useTranslation } from 'react-i18next';

export const UserLogoutModal = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const { t } = useTranslation();

  // const onLogout = async e => {
  //   e.preventDefault();
  //   dispatch(apiLogoutUser())
  //    .unwrap()
  //    .then(res => {
  //       dispatch(closeModal());
  //     })
  //    .catch(e => {
  //       toast.error('Something went wrong. Try again later.');
  //     });
  // };

  const onLogout = async e => {
    e.preventDefault();
    dispatch(apiLogoutUser());
    dispatch(closeModal());
  };
  return (
    <Modal modalId={modalNames.LOGOUT}>
      <Wrapper>
        <CloseModalCross />
        <Title>{t('managementCard.logoutCardTitle')}</Title>
        <Subtitle>{t('managementCard.logoutCardDescription')}</Subtitle>
        <Buttons>
          <YesNoButton
            onBtnClick={() => dispatch(closeModal())}
            text={t('managementCard.cancelButton')}
            approve="false"
          />

          <YesNoButton
            onBtnClick={onLogout}
            approve="true"
            text={t('managementCard.logoutButton')}
          />
        </Buttons>
      </Wrapper>
    </Modal>
  );
};
