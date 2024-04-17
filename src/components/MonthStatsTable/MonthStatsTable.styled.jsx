import styled from 'styled-components';
import { theme } from 'styles/theme';

export const MonthStatsTableContainer = styled.div`
  width: 264px;
  margin-top: 24px;
`;

export const MonthContainer = styled.div`
  width: 100%
  height: 30px;
`;

export const Month = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: ${theme.lineHeights.text};
  color: ${theme.colors.primaryBlack};
`;
