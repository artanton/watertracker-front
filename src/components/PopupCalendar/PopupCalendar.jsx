import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { selectActualMonth } from '../../redux/selectors';

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

const Popup = ({ isOpen, onClose, selectedDate }) => {
  const [mobilePosition, setMobilePosition] = useState({ top: 0, left: 0 });

  const { t } = useTranslation();

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

  const monthData = useSelector(selectActualMonth);

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
      t('calendar.January'),
      t('calendar.February'),
      t('calendar.March'),
      t('calendar.April'),
      t('calendar.May'),
      t('calendar.June'),
      t('calendar.July'),
      t('calendar.August'),
      t('calendar.September'),
      t('calendar.October'),
      t('calendar.November'),
      t('calendar.December'),
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
            {t('calendar.norm')}
            <DailyNormaMl>{filteredData.dailyNorma / 1000} L</DailyNormaMl>
          </DailyNorma>
          <Fulfillment>
            {t('calendar.percent')}
            <FulfillmentPercentage>
              {filteredData.persantRate}%
            </FulfillmentPercentage>
          </Fulfillment>
          <Servings>
            {t('calendar.quantity')}
            <ServingsAmount>{filteredData.waterSavings}</ServingsAmount>
          </Servings>
        </div>
      )}
    </StyledPopup>
  );
};
export default Popup;
