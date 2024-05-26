import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { openModal } from '../../redux/modal/modalSlice';
import { selectorDailyNorma } from '../../redux/selectors';

import { ModalMyDailyNorma } from 'components';

import { modalNames } from 'constants/constants';

import {
  MyDailyNorma,
  MyDailyNormaAmount,
  MyDailyNormaContainer,
  WaterNormaAmount,
  WaterNormaAmountEdit,
} from './DailyNorma.styled';

const DailyNorma = () => {
  const dispatch = useDispatch();

  const dailyNorma = (useSelector(selectorDailyNorma) / 1000).toFixed(1);

  const { t } = useTranslation();

  return (
    <MyDailyNormaContainer>
      <MyDailyNorma>{t('MyDailyNorma.MyDailyNormaTitle')}</MyDailyNorma>
      <MyDailyNormaAmount>
        <WaterNormaAmount>
          {isNaN(dailyNorma) ? '0.0' : dailyNorma} L
        </WaterNormaAmount>
        <WaterNormaAmountEdit
          type="button"
          onClick={() => dispatch(openModal(modalNames.DAILY_NORMA))}
        >
          {t('MyDailyNorma.MyDailyNormaButton')}
        </WaterNormaAmountEdit>
      </MyDailyNormaAmount>
      <ModalMyDailyNorma />
    </MyDailyNormaContainer>
  );
};

export default DailyNorma;
