import styled from 'styled-components';
import { theme } from 'styles/theme';

export const ModalContainer = styled.div`
  padding: 32px 12px;
  width: 280px;
  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 1008px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.h2`
  font-size: ${theme.fontSizes.subtitle};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.subtitle};
  color: ${theme.colors.primaryBlack};
`;
