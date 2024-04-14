// import { useNavigate } from 'react-router-dom';
import {
  WaterTrackerContainer,
  WaterTrackerTitle,
  WaterTrackerInfo,
  WaterTrackerSubtitle,
  WaterTrackerList,
  WaterTrackerLi,
  Button,
  CalendarSvg,
  PersonalSetingsSvg,
  StatisticsSvg,
} from './WaterTracker.styled';

export const WaterTracker = () => {
  //   const navigate = useNavigate();

  const onClick = () => {
    // navigate('/signUp');
  };

  return (
    <WaterTrackerContainer>
      <WaterTrackerTitle>Water consumption tracker</WaterTrackerTitle>
      <WaterTrackerInfo>Record daily water intake and track</WaterTrackerInfo>
      <WaterTrackerSubtitle>Tracker Benefits</WaterTrackerSubtitle>
      <WaterTrackerList>
        <WaterTrackerLi>
          <CalendarSvg />
          Habit drive
        </WaterTrackerLi>
        <WaterTrackerLi>
          <StatisticsSvg />
          View statistics
        </WaterTrackerLi>
        <WaterTrackerLi>
          {' '}
          <PersonalSetingsSvg />
          Personal rate setting
        </WaterTrackerLi>
      </WaterTrackerList>
      <Button type="button" onClick={onClick}>
        Try tracker
      </Button>
    </WaterTrackerContainer>
  );
};
