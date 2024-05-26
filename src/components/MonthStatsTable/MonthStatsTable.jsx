import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMonthWater } from '../../redux/waterData/thunk';
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
import { selectActualMonth} from '../../redux/selectors';

const MonthStatsTable = () => {
  const dispatch = useDispatch();
  const monthData = useSelector(selectActualMonth);

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

  const handleMonthChange = newDate => {
    const timestamp = newDate.getTime(); // Получаем метку времени текущей даты
    dispatch(getMonthWater(timestamp)); // Вызываем thunk, передавая метку времени
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
            const isVisible = percentage < 100;
            return (
              <Container>
                <Border $isvisible={isVisible} />
                <DayPercentage>{percentage>100? "100":percentage}%</DayPercentage>
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
        onActiveStartDateChange={({ activeStartDate }) => {
          const newStartDate = new Date(activeStartDate); // Создаем копию объекта activeStartDate
          newStartDate.setMonth(newStartDate.getMonth() + 1); // Добавляем 1 к текущему месяцу
          handleMonthChange(newStartDate); // Вызываем функцию обработчика с новой датой
        }}
      />
    </MonthStatsTableContainer>
  );
};
export default MonthStatsTable;
