import { ModalBackdrop, ModalContent } from './Modal.styled';
import { selectModalActiveModal } from '../../redux/modal/modalSlice.selectors';
import { closeModal } from '../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Modal = ({ modalId, children }) => {
  const dispatch = useDispatch();
  const activeModal = useSelector(selectModalActiveModal);
  const closeModalOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    const closeModalonEsc = e => {
      if (e.key === 'Escape') {
        dispatch(closeModal());
      }
    };
    if (activeModal === modalId) {
      window.addEventListener('keydown', closeModalonEsc);
    }

    return () => {
      window.removeEventListener('keydown', closeModalonEsc);
    };
  }, [dispatch, activeModal, modalId]);
  return activeModal === modalId ? (
    <ModalBackdrop onClick={closeModalOnBackdrop}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>
  ) : null;
};
