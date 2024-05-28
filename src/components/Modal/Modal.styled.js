// import styled from 'styled-components';

// export const ModalBackdrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 999;
// `;
// export const ModalContent = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: #fff;
//   border-radius: 10px;
// `;

import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease forwards;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;

  max-height: 90%;
  overflow-y: auto;

  opacity: 0;
  animation: ${fadeIn} 0.3s ease forwards;
`;
