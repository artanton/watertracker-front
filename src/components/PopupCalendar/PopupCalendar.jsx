import React, { useEffect, useState } from 'react';
import { Trigger } from 'components/MonthStatsTable/MonthStatsTable.styled';
import {
  DailyNorma,
  DailyNormaMl,
  Data,
  Fulfillment,
  FulfillmentPercentage,
  Servings,
  ServingsAmount,
  StyledPopup,
} from './PopupCalendar.styled';
// import { selectorMonth } from '../../redux/selectors';

const Popup = ({ isOpen, onClose, selectedDate }) => {
  const [mobilePosition, setMobilePosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const mobileTop = viewportHeight / 2;
      const mobileLeft = viewportWidth / 2;
      setMobilePosition({ top: mobileTop, left: mobileLeft });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const filteredData = monthData.find(item => {
    // console.log(selectorMonth);
    const itemDate = new Date(item.date);
    return (
      itemDate.getDate() === selectedDate.getDate() &&
      itemDate.getMonth() === selectedDate.getMonth() &&
      itemDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  const formatDate = date => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const formattedMonth = monthNames[date.getMonth()];
    const formattedDay = date.getDate();
    return `${formattedDay}, ${formattedMonth}`;
  };

  return (
    <StyledPopup
      trigger={<Trigger />}
      on="hover"
      closeOnDocumentClick
      isOpen={isOpen}
      onClose={onClose}
      arrow={false}
      mobilePosition={mobilePosition}
    >
      {filteredData && (
        <div key={filteredData.date}>
          <Data>{formatDate(new Date(filteredData.date))}</Data>
          <DailyNorma>
            Daily norma:{' '}
            <DailyNormaMl>{filteredData.dailyNorma / 1000} L</DailyNormaMl>
          </DailyNorma>
          <Fulfillment>
            Fulfillment of the daily norm:{' '}
            <FulfillmentPercentage>
              {filteredData.persantRate}%
            </FulfillmentPercentage>
          </Fulfillment>
          <Servings>
            How many servings of water:{' '}
            <ServingsAmount>{filteredData.waterSavings}</ServingsAmount>
          </Servings>
        </div>
      )}
    </StyledPopup>
  );
};
export default Popup;
