import { LayoutHomePage } from './LayoutHome.styled';

export const LayoutHome = ({ children }) => {
  return (
    <>
      <LayoutHomePage>{children}</LayoutHomePage>
    </>
  );
};
