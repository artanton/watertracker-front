import { useDispatch, useSelector } from 'react-redux';
import { selectorWaterNotes, selectWater } from '../../redux/selectors';
import {
  openModal,
  addData,
  addWaterDose,
  addWaterDate,
} from '../../redux/modal/modalSlice';
// import { ModalEditWater } from 'components/ModalEditWater/ModalEditWater';
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
import { modalNames } from 'constants/constants';

const TodayWaterList = () => {
  const dispatch = useDispatch();
  const water = useSelector(selectWater);
  console.log('water', water);
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
        {waterNotes &&
          waterNotes.map((note, index) => (
            <WaterListItem key={note._id}>
              <WaterGlassIcon />
              <WaterListMl>{note.waterDose} ml</WaterListMl>
              <WaterListTime>{formatTime(note.createdDate)}</WaterListTime>
              <IconsContainer>
                <EditButton
                  type="button"
                  onClick={() => {
                    dispatch(openModal(modalNames.EDIT_WATER));
                    dispatch(addData(note._id));
                    dispatch(addWaterDose(note.waterDose));
                    dispatch(addWaterDate(note.createdDate));
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
