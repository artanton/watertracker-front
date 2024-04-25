import React from 'react';

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
import { Plus } from 'components/Icons/Plus/Plus';
import { openModal } from '../../redux/modal/modalSlice';
import { modalNames } from 'constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectorWaterNotes } from '../../redux/selectors';
import { ModalEditWater } from 'components/ModalEditWater/ModalEditWater';

const TodayWaterList = () => {
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
      <Today>Today</Today>
      <WaterList>
        {waterNotes.map((note, index) => (
          <WaterListItem
            key={index}
            water={note.waterDose}
            date={new Date(note.createdDate)}
            id={note._id}
          >
            <WaterGlassIcon />
            <WaterListMl>{note.waterDose} ml</WaterListMl>
            <WaterListTime>{formatTime(note.createdDate)}</WaterListTime>
            <IconsContainer>
              <EditButton
                type="button"
                onClick={() => dispatch(openModal(modalNames.EDIT_WATER))}
              >
                <WaterEditIcon />
              </EditButton>
              <DeleteButton
                type="button"
                // onClick={() => dispatch(openModal())}
              >
                <WaterDeleteIcon />
              </DeleteButton>
            </IconsContainer>
          </WaterListItem>
        ))}
      </WaterList>
      <AddWaterButton onClick={() => dispatch(openModal(modalNames.ADD_WATER))}>
        <Plus />
        Add water
      </AddWaterButton>
      <ModalEditWater />
    </TodayWaterListContainer>
  );
};

export default TodayWaterList;
