import React, { useRef, useState } from 'react';
import {useSelector } from 'react-redux';
import {
  ArrowLeft,
  ArrowRight,
  Border,
  Container,
  DayPercentage,
  Month,
  MonthStatsTableContainer,
  StyledCalendar,
  Trigger,
} from './MonthStatsTable.styled';
import Popup from 'components/PopupCalendar/PopupCalendar';
import { selectorMonth } from '../../redux/selectors';

// import { useSelector } from 'react-redux';
// import { selectorMonth } from '../../redux/selectors';

const MonthStatsTable = ({ date }) => {
  // const month = useSelector(selectorMonth);
  // console.log(month);
  // const persantRate = month.persantRate;
  // console.log(persantRate);

  const monthData = useSelector(selectorMonth);

  const [selectedDay, setSelectedDay] = useState(null);
  const handleDayClick = date => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const currentDayData = monthData.find(
      dayData =>
        dayData.date.startsWith(`${year}-${month + 1}-`) &&
        parseInt(dayData.date.slice(-2)) === day
    );

    setSelectedDay(currentDayData);
  };

  const triggerRef = useRef(null);

  return (
    <MonthStatsTableContainer>
      <Month>Month</Month>
      <StyledCalendar
        prevLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        locale="en-US"
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const currentDay = date.getDate();
            const currentDayData = monthData.find(dayData => {
              const day = parseInt(dayData.date.slice(-2));
              return day === currentDay;
            });

            const percentage = currentDayData ? currentDayData.persantRate : 0;
            const isVisible = percentage !== 100;
            return (
              <Container>
                <Border $isvisible={isVisible} />
                <DayPercentage>{percentage}%</DayPercentage>
                <Popup
                  isOpen={selectedDay === date.getDate()}
                  onClose={() => setSelectedDay(null)}
                  selectedDate={date}
                  triggerRef={triggerRef}
                >
                  <Trigger onClick={() => handleDayClick(date)} />
                </Popup>
              </Container>
            );
          }
          return null;
        }}
      />
    </MonthStatsTableContainer>
  );
};
export default MonthStatsTable;
