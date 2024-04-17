import styled from 'styled-components';
import { theme } from 'styles/theme';
import { Plus } from 'components/Icons/Plus/Plus';

export const TodayWaterListContainer = styled.div`
  width: 264px;
  height: 258px;

  @media (min-width: 768px) {
    width: 656px;
    height: 260px;
  }

  @media (min-width: 1440px) {
  }
`;
export const Today = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlack};

  @media (min-width: 768px) {
    font-size: ${theme.fontSizes.subtitle};
    line-height: ${theme.lineHeights.subtitle};
  }
`;

export const PlusIcon = styled(Plus)`
  width: 16px;
  height: 16px;
  margin: 0;
  margin-right: 8px;
  font-size: 18px;
  line-height: 24px;
`;

export const AddWaterButton = styled.button`
  margin-top: 12px;
  font-weight: 500;
  font-size: ${theme.fontSizes.listTitle};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.primaryBlue};
  border: none;
  background: none;
  display: flex;
  gap: 8px;

  &:hover {
    color: ${theme.colors.secondaryOrange};
  }
`;
export const WaterListUl = styled.ul`
  height: 212px;
  width: 100%;
`;

export const WaterItem = styled.li`
  height: 50px;
  border-top: 1px solid ${theme.colors.secondaryGrayBlue};
  border-bottom: 1px solid ${theme.colors.secondaryGrayBlue};
  align-items: center;
`;
