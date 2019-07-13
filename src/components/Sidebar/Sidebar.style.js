import styled from 'styled-components';
import WidgetWrapper from '../Global/WidgetWrapper.style';
import { Button } from '../TogglableButton/TogglableButton.style';

const FiltersWrapper = styled(WidgetWrapper)`
  height: 400px;
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  color: #646464;
  position: sticky;
  top: 30px;
`

const SidebarWrapper = styled.div``;

const ButtonsWrapper = styled.div`
  ${ Button } {
    &:not(:last-child) {
      margin-top: 10px;
      margin-right: 5px;
      display: inline-block;
      margin-bottom: 7px;
    }
  }
`

const Block = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export {
  FiltersWrapper,
  SidebarWrapper,
  ButtonsWrapper,
  Block
};