import styled from 'styled-components';
import { theme } from 'styles/theme';

const Button = styled.button`
  width: 256px;
  background-color: ${theme.colors.primaryBlue};
  padding: 8px 30px;
  border-radius: 10px;
  border: none;
  color: white;
  &:hover {
    box-shadow: 0px 4px 14px 0px #407bff8a;
  }
  @media (min-width: 768px) {
    width: 160px;
    padding: 10px 30px;
  }
`;
export const SaveModalButton = () => {
  return <Button type="submit">Save</Button>;
};
