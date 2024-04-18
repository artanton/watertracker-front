import React from 'react';
import {
  // DesktopContainer,
  ListContainer,
  WaterContainer,
  // WrapperHomePage,
} from './Home.styled';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import TodayWaterList from 'components/TodayWaterList/TodayWaterList';
import { Container } from 'styles/GlobalStyle';
import MonthStatsTable from 'components/MonthStatsTable/MonthStatsTable';
import { LayoutHome } from 'components/LayoutHome/LayoutHome';

function Home() {
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
    </LayoutHome>
  );
}

export default Home;
