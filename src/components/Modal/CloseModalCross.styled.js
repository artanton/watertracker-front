// import { styled } from 'styled-components';

// export const CloseModalCrossStyled = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   float: inline-end;
// `;
import styled from 'styled-components';
import { theme } from 'styles/theme';

export const CloseModalCrossStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  float: inline-end;
  color: ${theme.colors.primaryBlue};
  transition: ${theme.transition.normal}, color 0.3s ease;

  &:hover {
    transform: scale(1.3);
    color: ${theme.colors.secondaryOrange};
  }
`;
