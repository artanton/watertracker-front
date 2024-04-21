import styled from 'styled-components';
import { theme } from 'styles/theme';

export const ModalContainer = styled.div`
  width: 592px;
  height: 592px;
`;

export const ModalHeader = styled.div`
  display: flex;
`;

export const ModalTitle = styled.h2`
  font-size: ${theme.fontSizes.subtitle};
  font-weight: ${theme.fontWeights.medium};
`;
