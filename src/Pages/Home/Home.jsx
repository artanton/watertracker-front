import React, { useEffect } from 'react';
import { ListContainer, WaterContainer } from './Home.styled';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import TodayWaterList from 'components/TodayWaterList/TodayWaterList';
import { Container } from 'styles/GlobalStyle';
import MonthStatsTable from 'components/MonthStatsTable/MonthStatsTable';
import { LayoutHome } from 'components/LayoutHome/LayoutHome';
import {
  DeleteEntryModal,
  ModalAddWater,
  SettingModal,
  UserLogoutModal,
  ModalEditWater,
} from 'components';
import { useDispatch } from 'react-redux';
// import { apiGetUserSettings } from '../../redux/authorization/authReducer';
import { getWaterToday, getMonthWater } from '../../redux/waterData/thunk';
import { formatDate } from 'helpers/helpers';
// import { ModalEditWater } from 'components/ModalEditWater/ModalEditWater';
function Home() {
  const date = formatDate(new Date());

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(apiGetUserSettings());
    dispatch(getWaterToday());
    dispatch(getMonthWater(date));
  }, [date, dispatch]);
  return (
    <LayoutHome>
      <Container>
        <WaterContainer>
          <DailyNorma />
          <WaterRatioPanel />
        </WaterContainer>
        <ListContainer>
          <TodayWaterList />
          <MonthStatsTable />
        </ListContainer>
      </Container>
      <ModalAddWater />
      <DeleteEntryModal />
      <ModalEditWater />
      <SettingModal />
      <UserLogoutModal />
    </LayoutHome>
  );
}

export default Home;
