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
// import { selectorMonth } from '../../redux/selectors';

const MonthStatsTable = ({ date }) => {
  // const month = useSelector(selectorMonth);
  // console.log(month);
  // const persantRate = month.persantRate;
  // console.log(persantRate);

  const monthData = [
    {
      date: '2024-04-01',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-02',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-03',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-04',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-05',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-06',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-07',
      dailyNorma: 2000,
      persantRate: 15,
      waterSavings: 1,
    },
    {
      date: '2024-04-08',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-09',
      dailyNorma: 2000,
      persantRate: 25,
      waterSavings: 2,
    },
    {
      date: '2024-04-10',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-11',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-12',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-13',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-14',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-15',
      dailyNorma: 10000,
      persantRate: 90,
      waterSavings: 2,
    },
    {
      date: '2024-04-16',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-17',
      dailyNorma: 2000,
      persantRate: 38,
      waterSavings: 3,
    },
    {
      date: '2024-04-18',
      dailyNorma: 2000,
      persantRate: 13,
      waterSavings: 1,
    },
    {
      date: '2024-04-19',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-20',
      dailyNorma: 10000,
      persantRate: 123,
      waterSavings: 4,
    },
    {
      date: '2024-04-21',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-22',
      dailyNorma: 1000,
      persantRate: 10,
      waterSavings: 2,
    },
    {
      date: '2024-04-23',
      dailyNorma: 2000,
      persantRate: 242,
      waterSavings: 5,
    },
    {
      date: '2024-04-24',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-25',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-26',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-27',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-28',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-29',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
    {
      date: '2024-04-30',
      dailyNorma: 0,
      persantRate: 0,
      waterSavings: 0,
    },
  ];

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
