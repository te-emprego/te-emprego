import styled from 'styled-components';
import COLORS from '@/globalStyles/colors';

const Button = styled.button`
  border-radius: 10px;
  border: 3px solid ${COLORS.primary};
  background-color: ${({ isActive }) =>
    isActive ? COLORS.primary : COLORS.white};
  color: ${({ isActive }) => (isActive ? COLORS.white : COLORS.primary)};
  padding: 3px 15px;
  font-size: 18px;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  outline: none;
  transition: 0.25s ease;

  &:hover,
  &:focus {
    transform: translateY(-3px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  }
`;

export { Button };
