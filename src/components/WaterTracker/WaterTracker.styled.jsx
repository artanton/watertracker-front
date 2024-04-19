import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { ReactComponent as Calendar } from '../../Pages/WelcomePage/icons/calendar.svg';
import { ReactComponent as PersonalSetings } from '../../Pages/WelcomePage/icons/personal-settings.svg';
import { ReactComponent as Statistics } from '../../Pages/WelcomePage/icons/statistics.svg';

export const WaterTrackerContainer = styled.div`
  margin-bottom: 40px;
  color: ${theme.colors.primaryBlack};
  font-size: 28px;
  @media only screen and (min-width: 1440px) {
    margin-right: 81px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 767px) and (max-width: 1439px) {
    margin-bottom: 60px;
    font-size: 36px;
  }
`;
export const WaterTrackerTitle = styled.h2`
  line-height: 1.16em;
  color: ${theme.colors.primaryBlack};
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 16px;
  margin-top: 0px;
  @media only screen and (min-width: 767px) {
    font-size: 36px;
    line-height: 1.28em;
  }
`;
export const WaterTrackerInfo = styled.p`
  margin-bottom: 24px;
  margin-top: 0px;
  line-height: 1.25em;
  color: #2f2f2f;
  font-size: 24px;
  @media only screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23em;
  }
`;

export const WaterTrackerSubtitle = styled.h3`
  color: ${theme.colors.primaryBlack};
  font-size: 18px;
  margin-bottom: 24px;
  margin-top: 0px;
  font-weight: 500;
  line-height: 1.11em;
`;
export const WaterTrackerList = styled.ul`
  font-size: 16px;
  line-height: 1.25em;
  margin-bottom: 24px;
  padding-inline-start: 0px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const WaterTrackerLi = styled.li`
  color: ${theme.colors.primaryBlack};
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const Button = styled.button`
  width: 280px;
  height: 36px;
  padding: 8px 30px;
  border-radius: 10px;
  border: none;
  color: ${theme.colors.primaryWhite};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.33em;
  background-color: ${theme.colors.primaryBlue};
  font-family: @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 336px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;

export const CalendarSvg = styled(Calendar)`
  margin-right: 8px;
`;
export const PersonalSetingsSvg = styled(PersonalSetings)`
  margin-right: 8px;
`;
export const StatisticsSvg = styled(Statistics)`
  margin-right: 8px;
`;
