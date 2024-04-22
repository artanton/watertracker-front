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

// const WaterListDisplay = () => {}

// const WaterItem = ({id, ml, time}) => {
//   const dispatch = useDispatch();

//   const handleEditBtn = (id) => {
// const edit = edit(?) (id);
// dispatchEvent(action);
// }
//   const handleDeleteBtn = (id) =>{
//const delete = delete(?)(id);
// dispatch(delete)
// };}

const TodayWaterList = () => {
  const dispatch = useDispatch();

  return (
    <TodayWaterListContainer>
      <Today>Today</Today>
      <WaterList>
        <WaterListItem>
          <WaterGlassIcon />
          <WaterListMl>
            {/* {ml} */}
            200 ml
          </WaterListMl>
          <WaterListTime>
            {/* {time} */}
            14:00 PM
          </WaterListTime>
          <IconsContainer>
            <EditButton
            // onClick={HandleEditBtn}
            >
              <WaterEditIcon />
            </EditButton>

            <DeleteButton
            // onClick={HandleDeleteBtn}
            >
              <WaterDeleteIcon />
            </DeleteButton>
          </IconsContainer>
        </WaterListItem>
      </WaterList>
      <AddWaterButton onClick={() => dispatch(openModal(modalNames.ADD_WATER))}>
        <Plus />
        Add water
      </AddWaterButton>
    </TodayWaterListContainer>
  );
};

export default TodayWaterList;
