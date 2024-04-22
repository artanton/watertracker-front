import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Border,
  DayPercentage,
  Month,
  MonthStatsTableContainer,
  StyledCalendar,
} from './MonthStatsTable.styled';

const MonthStatsTable = () => {
  const dayPercentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <MonthStatsTableContainer>
      <Month>Month</Month>
      <StyledCalendar
        prevLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        locale="en-US"
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const dayOfMonth = date.getDate();
            const percentage = dayPercentages[dayOfMonth - 1];
            const isVisible = percentage !== 100;

            return (
              <>
                <Border $isvisible={isVisible} />
                <DayPercentage>{percentage}%</DayPercentage>
              </>
            );
          }
          return null;
        }}
      />
    </MonthStatsTableContainer>
  );
};

export default MonthStatsTable;
