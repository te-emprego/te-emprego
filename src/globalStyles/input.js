import styled from 'styled-components';

import colors from '@/globalStyles/colors';

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 20px 0;
  border: none;
  border-bottom: 1px solid ${colors.white};
  background: transparent;
  outline: none;
  color: ${colors.white};
  font-family: 'Nunito', sans-serif;
  font-size: 1.1rem;

  &::placeholder {
    color: ${colors.white};
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
  }
`;
