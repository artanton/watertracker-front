import React from 'react';
import {
  DesktopContainer,
  ListContainer,
  WrapperHomePage,
} from './Home.styled';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import TodayWaterList from 'components/TodayWaterList/TodayWaterList';
import { Container } from 'styles/GlobalStyle';
import MonthStatsTable from 'components/MonthStatsTable/MonthStatsTable';
function Home() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <WrapperHomePage>
        <Container>
          <DesktopContainer>
            <DailyNorma />
            <WaterRatioPanel />
          </DesktopContainer>
          <ListContainer>
            <TodayWaterList />
            <MonthStatsTable />
          </ListContainer>
        </Container>
      </WrapperHomePage>
    </div>
  );
}

export default Home;
