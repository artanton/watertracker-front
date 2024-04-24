import styled from 'styled-components';
import { HoopSpinner } from 'react-spinners-kit';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: 'rgba(215, 227, 255, 0.8)';
  z-index: 999;
  overflow: scroll;
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledLoader = styled(HoopSpinner)``;
