import styled from 'styled-components';

import { theme } from 'styles/theme';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 2px;
`;

export const Button = styled.button`
  width: 42px;

  background: none;

  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  border: none;
  opacity: ${props => (props.$isActive ? 1 : 0.5)};
  /* border: ${props =>
    props.$isActive ? `1px solid ${theme.colors.primaryBlue}` : 'none'}; */
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
