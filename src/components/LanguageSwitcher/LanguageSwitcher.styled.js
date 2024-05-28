import styled from 'styled-components';

import { theme } from 'styles/theme';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const Button = styled.button`
  display: inline-block;

  background: none;

  cursor: pointer;
  padding: 0 8px;
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
