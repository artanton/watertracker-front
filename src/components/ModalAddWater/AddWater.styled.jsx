import styled from 'styled-components';
import { theme } from 'styles/theme';

export const ModalContainer = styled.div`
  width: 592px;
  padding: 32px 24px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.h2`
  font-size: ${theme.fontSizes.subtitle};
  font-weight: ${theme.fontWeights.medium};
`;

export const ModalSubTitle = styled.p`
  font-size: ${theme.fontSizes.listTitle};
  font-weight: ${theme.fontWeights.medium};
  margin-bottom: 16px;
`;
