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

import { selectorDailyNorma } from '../../redux/selectors';

const DailyNorma = () => {
  const dispatch = useDispatch();

  const dailyNorma = selectorDailyNorma / 1000;

  return (
    <MyDailyNormaContainer>
      <MyDailyNorma>My daily norma</MyDailyNorma>
      <MyDailyNormaAmount>
        <WaterNormaAmount>{dailyNorma}L</WaterNormaAmount>
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
