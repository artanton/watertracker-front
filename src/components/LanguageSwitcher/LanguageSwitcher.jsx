import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { FlagGermany } from 'components/Icons/FlagGermany';
import { FlagGreatBritain } from 'components/Icons/FlagGreatBritain';

import { ButtonContainer, Button } from './ButtonSwitcher.styled';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);

  useEffect(() => {
    setActiveLang(i18n.language);
  }, [i18n.language]);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setActiveLang(lng);
  };

  return (
    <ButtonContainer>
      <Button
        onClick={() => changeLanguage('en')}
        $isActive={activeLang === 'en'}
      >
        <FlagGreatBritain />
      </Button>
      <Button
        onClick={() => changeLanguage('de')}
        $isActive={activeLang === 'de'}
      >
        <FlagGermany />
      </Button>
    </ButtonContainer>
  );
};
