import { Close } from 'components/Icons/Close';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice';
import { CloseModalCrossStyled } from './CloseModalCross.styled';

export const CloseModalCross = () => {
  const dispatch = useDispatch();
  return (
    <CloseModalCrossStyled type="button" onClick={() => dispatch(closeModal())}>
      <Close />
    </CloseModalCrossStyled>
  );
};
