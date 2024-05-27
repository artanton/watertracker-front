import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { selectorWaterNotes } from '../../redux/selectors';
import {
  openModal,
  addData,
  addWaterDose,
  addWaterDate,
} from '../../redux/modal/modalSlice';

import { Plus } from 'components/Icons/Plus/Plus';

import { modalNames } from 'constants/constants';

import {
  AddWaterButton,
  DeleteButton,
  EditButton,
  IconsContainer,
  Today,
  TodayWaterListContainer,
  WaterDeleteIcon,
  WaterEditIcon,
  WaterGlassIcon,
  WaterList,
  WaterListItem,
  WaterListMl,
  WaterListTime,
} from './TodayWaterList.styled';

const TodayWaterList = () => {
  const { t } = useTranslation();
  const openEditModal = note => {
    dispatch(addData(note._id));
    dispatch(addWaterDose(note.waterDose));
    dispatch(addWaterDate(note.createdDate));
    dispatch(openModal(modalNames.EDIT_WATER));
  };

  const dispatch = useDispatch();
  const waterNotes = useSelector(selectorWaterNotes);
  const formatTime = timeString => {
    const date = new Date(timeString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  return (
    <TodayWaterListContainer>
      <Today>{t('TodayWater.TodayWaterTitle')}</Today>
      <WaterList>
        {waterNotes && waterNotes.length > 0 ? (
          waterNotes.map((note, index) => (
            <WaterListItem key={note._id}>
              <WaterGlassIcon />
              <WaterListMl>{note.waterDose} ml</WaterListMl>
              <WaterListTime>{formatTime(note.createdDate)}</WaterListTime>
              <IconsContainer>
                <EditButton
                  type="button"
                  onClick={() => {
                    // dispatch(openModal(modalNames.EDIT_WATER));
                    // dispatch(addData(note._id));
                    // dispatch(addWaterDose(note.waterDose));
                    // dispatch(addWaterDate(note.createdDate));
                    openEditModal(note);
                  }}
                >
                  <WaterEditIcon />
                </EditButton>
                <DeleteButton
                  type="button"
                  onClick={() => {
                    dispatch(openModal(modalNames.DELETE_ENTRY));
                    dispatch(addData(note._id));
                  }}
                >
                  <WaterDeleteIcon />
                </DeleteButton>
              </IconsContainer>
            </WaterListItem>
          ))
        ) : (
          <p>{t('TodayWater.TodayWaterMessage')}</p>
        )}
      </WaterList>

      <AddWaterButton onClick={() => dispatch(openModal(modalNames.ADD_WATER))}>
        <Plus />
        {t('TodayWater.TodayWaterButton')}
      </AddWaterButton>
    </TodayWaterListContainer>
  );
};

export default TodayWaterList;
