import { useTranslation } from 'react-i18next';

import { ClapSpinner } from 'react-spinners-kit';

import styled from 'styled-components';
import { theme } from 'styles/theme';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 256px;
  background-color: ${theme.colors.primaryBlue};
  padding: 8px 30px;
  border-radius: 10px;
  border: none;
  color: white;

  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.text};
  line-height: ${theme.lineHeights.text};

  &:hover {
    box-shadow: 0px 4px 14px 0px #407bff8a;
  }
  @media (min-width: 768px) {
    width: 160px;
    padding: 10px 30px;

    font-weight: ${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.listTitle};
    line-height: ${theme.lineHeights.info};
  }
`;

export const SaveModalButton = ({ isLoading }) => {
  const { t } = useTranslation();
  return isLoading ? (
    <Button type="submit">
      {isLoading ? <ClapSpinner size={16} frontColor={'#fff'} /> : 'Save'}
    </Button>
  ) : (
    <Button type="submit">{t('AddAndEditWaterCard.saveButton')}</Button>
  );
};
