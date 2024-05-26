import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  WaterTrackerContainer,
  WaterTrackerTitle,
  WaterTrackerInfo,
  WaterTrackerSubtitle,
  WaterTrackerList,
  WaterTrackerLi,
  Button,
  CalendarSvg,
  PersonalSetingsSvg,
  StatisticsSvg,
} from './WaterTracker.styled';

export const WaterTracker = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClick = () => {
    navigate('/signup');
  };

  return (
    <WaterTrackerContainer>
      <WaterTrackerTitle>{t('WelcomePage.mainTitle')}</WaterTrackerTitle>
      <WaterTrackerInfo>{t('WelcomePage.slogan')}</WaterTrackerInfo>
      <WaterTrackerSubtitle>
        {t('WelcomePage.subtitleBenefits')}
      </WaterTrackerSubtitle>
      <WaterTrackerList>
        <WaterTrackerLi>
          <CalendarSvg />
          {t('WelcomePage.itemArrayBenefits.benefit1')}
        </WaterTrackerLi>
        <WaterTrackerLi>
          <StatisticsSvg />
          {t('WelcomePage.itemArrayBenefits.benefit2')}
        </WaterTrackerLi>
        <WaterTrackerLi>
          <PersonalSetingsSvg />
          {t('WelcomePage.itemArrayBenefits.benefit3')}
        </WaterTrackerLi>
      </WaterTrackerList>
      <Button type="button" onClick={onClick}>
        {t('WelcomePage.tryTreckerButton')}
      </Button>
    </WaterTrackerContainer>
  );
};
