import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { ReactComponent as Calendar } from '../../Pages/WelcomePage/icons/calendar.svg';
import { ReactComponent as PersonalSetings } from '../../Pages/WelcomePage/icons/personal-settings.svg';
import { ReactComponent as Statistics } from '../../Pages/WelcomePage/icons/statistics.svg';

export const WaterTrackerContainer = styled.div`
  margin-bottom: 40px;
  color: ${theme.colors.primaryBlack};
  font-size: ${theme.fontSizes.subtitle};
  @media only screen and (min-width: 1440px) {
    margin-right: 81px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 767px) and (max-width: 1439px) {
    margin-bottom: 60px;
    font-size: ${theme.fontSizes.mainTitle};
  }
`;
export const WaterTrackerTitle = styled.h2`
  line-height: ${theme.lineHeights.mainTitle};
  color: ${theme.colors.primaryBlack};
  font-weight: ${theme.fontWeights.medium};
  font-size: ${theme.fontSizes.subtitle};
  margin-bottom: 16px;
  margin-top: 0px;
  @media only screen and (min-width: 767px) {
    font-size: ${theme.fontSizes.mainTitle};
    line-height: ${theme.lineHeights.text};
  }
`;
export const WaterTrackerInfo = styled.p`
  margin-bottom: 24px;
  margin-top: 0px;
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlack};
  font-size: ${theme.fontSizes.text};
  @media only screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.subtitle};
    line-height: ${theme.lineHeights.text};
  }
`;

export const WaterTrackerSubtitle = styled.h3`
  color: ${theme.colors.primaryBlack};
  font-size: ${theme.fontSizes.listTitle};
  margin-bottom: 24px;
  margin-top: 0px;
  font-weight: ${theme.fontWeights.medium};
  line-height: ${theme.lineHeights.listTitle};
`;
export const WaterTrackerList = styled.ul`
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};
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
  font-size: ${theme.fontSizes.text};
  font-weight: ${theme.fontWeights.regular};
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
  border-radius: ${theme.radii.normal};
  border: none;
  color: ${theme.colors.primaryWhite};
  font-size: ${theme.fontSizes.text};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.text};

  background-color: ${theme.colors.primaryBlue};
  box-shadow: ${theme.shadows.normalButton};
  &:hover {
    box-shadow: ${theme.shadows.hoverButton};
  }
  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.listTitle};
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
