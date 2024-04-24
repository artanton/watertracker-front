import React, { useRef, useState } from 'react';
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
// import { useSelector } from 'react-redux';

// const TriggerButton = forwardRef((props, ref) => (
//   <Trigger ref={ref} {...props} />
// ));

const MonthStatsTable = () => {
  const persantageRate = 50;
  const [selectedDay, setSelectedDay] = useState(null); // Стан для зберігання обраного дня

  const handleDayClick = date => {
    setSelectedDay(date);
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
            const isVisible = persantageRate !== 100;
            return (
              <Container>
                <Border $isvisible={isVisible} />
                {/* {dayData( */}
                <DayPercentage>{persantageRate}%</DayPercentage>
                {/* )} */}
                <Popup
                  isOpen={selectedDay === date.getDate()}
                  onClose={() => setSelectedDay(null)}
                  selectedDate={date}
                  triggerRef={triggerRef}
                >
                  {/* <TriggerButton
                    ref={triggerRef}
                    onClick={() => handleDayClick(date)}
                  /> */}
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
