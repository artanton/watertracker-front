import styled from 'styled-components';
import { theme } from 'styles/theme';
import Calendar from 'react-calendar';
import { CalendarArrowLeft } from 'components/Icons/CalendarArrowLeft';
import { CalendarArrowRight } from 'components/Icons/CalendarArrowRight';

export const MonthStatsTableContainer = styled.div`
  width: 264px;
  margin-top: 24px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
  }
`;

export const MonthContainer = styled.div`
  width: 100%
  height: 30px;

  @media screen and (min-width: 768px){
    height: 32px;
  }
`;

export const Month = styled.h2`
  font-weight: ${theme.fontWeights.normal};
  font-size: 24px;
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlack};

  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.subtitle};
    line-height: ${theme.lineHeights.subtitle};
  }
`;

export const ArrowLeft = styled(CalendarArrowLeft)`
  width: 14px;
  height: 14px;
  fill: #407bff;
`;

export const ArrowRight = styled(CalendarArrowRight)`
  width: 14px;
  height: 14px;
  fill: #407bff;
`;

export const StyledCalendar = styled(Calendar)`
  .react-calendar__navigation {
    display: flex;
    margin-bottom: 16px;
    width: 151px;
    margin-left: auto;
    margin-top: -25px;

  @media screen and (min-width: 1440px) {
   margin-top: -23px;
  }
  }

  .react-calendar__navigation__prev-button {
    background-color: transparent;
    border: none;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-calendar__navigation__next-button {
    background-color: transparent;
    border: none;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  //* Прибирає кнопки років*//

  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  //* Прибирає кнопки років*//

  .react-calendar__navigation__label {
    font-weight: ${theme.fontWeights.regular};
    font:size: ${theme.fontSizes.text};
    line-height: ${theme.lineHeights.text};
    color: ${theme.colors.primaryBlue};
    width: 76px;
    padding: 0;
    border: none;
    background-color: transparent;
    pointer-events: none;
  }


  .react-calendar__navigation__arrow--month-button {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }



  .react-calendar__month-view__weekdays {
    display: none !important;
  }

/* дні поточного місяцю */

  .react-calendar__month-view__days__day--neighboringMonth {
  display: none;
}

/* дні поточного місяцю */

.react-calendar__month-view__days{
    row-gap: 36px !important;
    column-gap: 26px;

    @media screen and (min-width: 768px) and (max-width: 1439px) {
     row-gap: 44px !important;
     column-gap: 34px;
    }

    @media screen and (min-width: 1440px) {
   row-gap: 42px !important;
     column-gap: 22px;
  }
}

.react-calendar__tile {
    position: relative;
  }

.react-calendar__month-view__days__day{
  flex: initial !important;
    width: 32px !important;
    height: 32px;
    border-color: transparent;
    border-radius: 20px;
    background-color: ${theme.colors.primaryWhite};
    
    font-weight: ${theme.fontWeights.regular};
    font-size: 14px;
    line-height: 18px;
    color: ${theme.colors.primaryBlack};
    cursor: pointer;
    position: relative;

    &:hover{
      box-shadow: 0px 2px 4px 0px #407BFF4D;
    }

    @media screen and (min-width: 768px){
    width: 34px !important;
    height: 34px;
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.text};
    line-height: ${theme.lineHeights.text};
    }

}

.react-calendar__month-view__days__day abbr {
    width: 20px;
}

.react-calendar__month-view__days__day {
    position: relative;
     overflow: visible !important; 
}
`;

export const DayPercentage = styled.span`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: ${theme.fontWeights.regular};
  font-size: 10px;
  line-height: 16px;
  color: ${theme.colors.secondaryBlue};
  margin-left: 2px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-weight: ${theme.fontWeights.regular};
    font-size: 13px;
    line-height: 20px;
    bottom: -24px;
  }

  @media screen and (min-width: 1440px) {
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.info};
    line-height: 20px;
    bottom: -24px;
  }
`;

export const Border = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ff9d43;
  background-color: transparent;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  visibility: ${({ $isvisible }) => ($isvisible ? 'visible' : 'hidden')};

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;
