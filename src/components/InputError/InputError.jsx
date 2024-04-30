import styled from 'styled-components';
import { theme } from 'styles/theme';

const Error = styled.span`
  font-size: ${theme.fontSizes.info};
  line-height: ${theme.lineHeights.info};
  color: ${theme.colors.secondaryRed};
`;
export const InputError = ({ children }) => {
  return <Error>{children}</Error>;
};
