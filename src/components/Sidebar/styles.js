import styled from 'styled-components';
import { Button } from '@components/TogglableButton/styles';

const WidgetWrapper = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 20px;
`;

const FiltersWrapper = styled(WidgetWrapper)`
  font-family: 'Nunito', sans-serif;
  font-size: 13px;
  color: #646464;
  position: sticky;
  top: 30px;

  @media screen and (max-width: 1200px) {
    display: flex;
  }
`;

const SidebarWrapper = styled.div`
  @media screen and (max-width: 990px) {
    display: none;
  }
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
  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 1200px) {
    flex: 1;
  }
`;

export { FiltersWrapper, SidebarWrapper, ButtonsWrapper, Block };
