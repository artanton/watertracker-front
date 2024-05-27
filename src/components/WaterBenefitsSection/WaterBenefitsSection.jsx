import { useTranslation } from 'react-i18next';

import {
  WaterBenefitsContainer,
  WaterTitle,
  BenefitsList,
  BenefitsLi,
} from './WaterBenefitsSection.styled';

export const WaterBenefitsSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <WaterBenefitsContainer>
        <WaterTitle>{t('WelcomePage.subtitleOptions')}</WaterTitle>
        <BenefitsList>
          <BenefitsLi>{t('WelcomePage.itemArrayOptions.option1')}</BenefitsLi>
          <BenefitsLi>{t('WelcomePage.itemArrayOptions.option2')}</BenefitsLi>
          <BenefitsLi>{t('WelcomePage.itemArrayOptions.option3')}</BenefitsLi>
          <BenefitsLi>{t('WelcomePage.itemArrayOptions.option4')}</BenefitsLi>
          <BenefitsLi>{t('WelcomePage.itemArrayOptions.option5')}</BenefitsLi>
          <BenefitsLi>{t('WelcomePage.itemArrayOptions.option6')}</BenefitsLi>
          <BenefitsLi>{t('WelcomePage.itemArrayOptions.option7')}</BenefitsLi>
        </BenefitsList>
      </WaterBenefitsContainer>
    </>
  );
};
