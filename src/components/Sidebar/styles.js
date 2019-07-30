import styled from 'styled-components';
import { Button } from '@components/TogglableButton/styles';

const WidgetWrapper = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 20px;
  width: 22.5vw;
`;

const FiltersWrapper = styled(WidgetWrapper)`
  height: 400px;
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  color: #646464;
  position: sticky;
  top: 30px;
`;

const SidebarWrapper = styled.div`
  position: fixed;
`;

const ButtonsWrapper = styled.div`
  ${Button} {
    &:not(:last-child) {
      margin-top: 10px;
      margin-right: 5px;
      display: inline-block;
      margin-bottom: 7px;
    }
  }
`;

const Block = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export { FiltersWrapper, SidebarWrapper, ButtonsWrapper, Block };
