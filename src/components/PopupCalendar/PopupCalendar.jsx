import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import { selectorMonth } from '../../redux/selectors';

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

  const monthData = useSelector(selectorMonth);

  const filteredData = monthData.find(item => {
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
