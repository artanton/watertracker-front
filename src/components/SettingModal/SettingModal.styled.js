import styled from 'styled-components';
import { theme } from 'styles/theme';

export const ModalContainer = styled.div`
  padding: 32px 20px;
  width: 280px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const SettingsHeader = styled.h2`
  font-family: Roboto;
  font-size: ${theme.fontSizes.subtitle};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.subtitle};
  color: ${theme.colors.primaryBlack};
`;
