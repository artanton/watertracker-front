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

import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export const DeleteEntryModal = () => {
  const dispatch = useDispatch();
  const waterId = useSelector(selectModalData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { t } = useTranslation();
  const onDelete = async e => {
    e.preventDefault();
    dispatch(deleteWater(waterId))
      .unwrap()
      .then(res => {
        toast.success('Water record is deleted');
      })
      .catch(e => {
        toast.error('Something went wrong. Try again later.');
      });
    dispatch(closeModal());
  };

  return (
    <Modal modalId={modalNames.DELETE_ENTRY}>
      <Wrapper>
        <CloseModalCross />
        <Title>{t('managementCard.deleteCardTitle')}</Title>
        {error && <Subtitle>Error: {error}</Subtitle>}
        {!error && (
          <Subtitle>{t('managementCard.deleteCardDescription')}</Subtitle>
        )}
        <Buttons>
          <YesNoButton
            onBtnClick={() => dispatch(closeModal())}
            text={t('managementCard.cancelButton')}
            approve="false"
            disabled={isLoading}
          />
          <YesNoButton
            onBtnClick={onDelete}
            approve="true"
            text={t('managementCard.deleteButton')}
            disabled={isLoading}
          />
        </Buttons>
      </Wrapper>
    </Modal>
  );
};
