import React from 'react';
import {
  AddWaterButton,
  // PlusIcon,
  Today,
  TodayWaterListContainer,
  // WaterList,
  // WaterListUl,
} from './TodayWaterList.styled';
import { Plus } from 'components/Icons/Plus/Plus';
// import { useDispatch } from 'react-redux';

// const WaterItem = ({id, ml, time}) => {
//   const dispatch = useDispatch();
//   const handleEditBtnClick = () => {}
//   const handleDeleteBtnClick = () =>{}
//   return ()
// }

// const WaterList = () => {
//   return (
//     <WaterListUl>

//     </WaterListUl>
//   )
// }

const TodayWaterList = ({ HandleOpenModal }) => {
  return (
    <TodayWaterListContainer>
      <Today>Today</Today>
      <AddWaterButton onClick={HandleOpenModal}>
        <Plus />
        Add water
      </AddWaterButton>
    </TodayWaterListContainer>
  );
};

export default TodayWaterList;
