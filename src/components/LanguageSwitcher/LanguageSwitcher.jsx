import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { FlagGermany } from 'components/Icons/FlagGermany';
import { FlagGreatBritain } from 'components/Icons/FlagGreatBritain';

import { ButtonContainer, Button } from './LanguageSwitcher.styled';

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
        <FlagGreatBritain width={20} />
      </Button>
      <Button
        onClick={() => changeLanguage('de')}
        $isActive={activeLang === 'de'}
      >
        <FlagGermany width={20} />
      </Button>
    </ButtonContainer>
  );
};

// import { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';

// import { FlagGermany } from 'components/Icons/FlagGermany';
// import { FlagGreatBritain } from 'components/Icons/FlagGreatBritain';

// import { SelectContainer, LanguageSelect } from './LanguageSwitcher.styled';

// export const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const [activeLang, setActiveLang] = useState(i18n.language);

//   useEffect(() => {
//     setActiveLang(i18n.language);
//   }, [i18n.language]);

//   const changeLanguage = event => {
//     const lng = event.target.value;
//     i18n.changeLanguage(lng);
//     setActiveLang(lng);
//   };

//   return (
//     <SelectContainer>
//       <LanguageSelect value={activeLang} onChange={changeLanguage}>
//         <option value="en">
//           <FlagGreatBritain /> English
//         </option>
//         <option value="de">
//           <FlagGermany /> Deutsch
//         </option>
//       </LanguageSelect>
//     </SelectContainer>
//   );
// };

// import { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import Select from 'react-select';
// import { FlagGermany } from 'components/Icons/FlagGermany';
// import { FlagGreatBritain } from 'components/Icons/FlagGreatBritain';

// const options = [
//   {
//     value: 'en',
//     label: 'En',
//     icon: <FlagGreatBritain width={16} height={16} />,
//   },
//   { value: 'de', label: 'De', icon: <FlagGermany width={16} height={16} /> },
// ];

// export const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const [selectedOption, setSelectedOption] = useState(
//     options.find(option => option.value === i18n.language)
//   );

//   useEffect(() => {
//     setSelectedOption(options.find(option => option.value === i18n.language));
//   }, [i18n.language]);

//   const handleChange = selectedOption => {
//     setSelectedOption(selectedOption);
//     i18n.changeLanguage(selectedOption.value);
//   };

//   const customComponents = {
//     DropdownIndicator: () => null,
//     IndicatorSeparator: () => null,
//   };

//   const customStyles = {
//     control: provided => ({
//       ...provided,
//       display: 'flex',
//       alignItems: 'center',
//       border: 'none',
//       fontSize: '16px',
//     }),
//     option: (provided, state) => ({
//       ...provided,
//       display: 'flex',
//       alignItems: 'center',
//       fontSize: '16px',
//     }),
//     singleValue: (provided, state) => ({
//       ...provided,
//       display: 'flex',
//       alignItems: 'center',
//     }),
//   };

//   const formatOptionLabel = ({ value, label, icon }) => (
//     <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//       {icon}
//       {label}
//     </div>
//   );

//   return (
//     <Select
//       value={selectedOption}
//       onChange={handleChange}
//       options={options}
//       styles={customStyles}
//       formatOptionLabel={formatOptionLabel}
//       components={customComponents}
//     />
//   );
// };
