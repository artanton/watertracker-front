import { useDispatch } from 'react-redux';

import { openModal } from '../../redux/modal/modalSlice';

import { modalNames } from 'constants/constants';

import { ModalMyDailyNorma } from 'components';

import {
  MyDailyNorma,
  MyDailyNormaAmount,
  MyDailyNormaContainer,
  WaterNormaAmount,
  WaterNormaAmountEdit,
} from './DailyNorma.styled';

const DailyNorma = () => {
  const dispatch = useDispatch();
  return (
    <MyDailyNormaContainer>
      <MyDailyNorma>My daily norma</MyDailyNorma>
      <MyDailyNormaAmount>
        <WaterNormaAmount>2.0 L</WaterNormaAmount>
        <WaterNormaAmountEdit
          type="button"
          onClick={() => dispatch(openModal(modalNames.DAILY_NORMA))}
        >
          Edit
        </WaterNormaAmountEdit>
      </MyDailyNormaAmount>
      <ModalMyDailyNorma />
    </MyDailyNormaContainer>
  );
};

export default DailyNorma;
