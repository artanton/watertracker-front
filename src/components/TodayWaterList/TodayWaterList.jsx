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
import { useDispatch } from 'react-redux';

const TodayWaterList = () => {
  const dispatch = useDispatch();

  const waterNotes = [
    {
      createdDate: '2024-04-23T21:23:05.617Z',
      waterDose: 4000,
      _id: '6626ff3e6149a47f0cac0eb9',
    },
    {
      createdDate: '2024-04-23T10:23:05.617Z',
      waterDose: 200,
      _id: '6627bf7362875984080d1d8d',
    },
    {
      createdDate: '2024-04-23T12:23:05.617Z',
      waterDose: 200,
      _id: '6627bf7962875984080d1d95',
    },
    {
      createdDate: '2024-04-23T15:23:05.617Z',
      waterDose: 300,
      _id: '6627bf9362875984080d1d9f',
    },
    {
      createdDate: '2024-04-23T16:23:05.617Z',
      waterDose: 150,
      _id: '6627bfa862875984080d1dab',
    },
  ];

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
          <WaterListItem key={index}>
            <WaterGlassIcon />
            <WaterListMl>{note.waterDose} ml</WaterListMl>
            <WaterListTime>{formatTime(note.createdDate)}</WaterListTime>
            <IconsContainer>
              <EditButton
                type="button"
                // onClick={() => dispatch(openModal())}
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
    </TodayWaterListContainer>
  );
};

export default TodayWaterList;
