import styled from 'styled-components';

export const OverlayWrapper = styled.div`
  background-color: black;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  z-index: 2;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.7;
`;
