import styled from 'styled-components';
import { theme } from 'styles/theme';

export const PopupButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  margin-left: 8px;
  white-space: nowrap;

  color: ${theme.colors.primaryBlue};
  font-size: ${theme.fontSizes.text};
  font-weight: ${theme.fontWeights.regular};
`;

export const ButtonContent = styled.div`
  display: flex;
  /* align-items: row; */
  /* align-items: center; */

  transition: ${theme.transition.normal};

  &:hover {
    transform: scale(1.2);
  }
`;
