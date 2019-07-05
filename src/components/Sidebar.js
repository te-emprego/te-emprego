import React, { Component } from 'react'
import WidgetWrapper from './WidgetWrapper'
import styled from 'styled-components'
import TogglabeButton from './TogglableButton'

const FiltersWrapper = styled(WidgetWrapper)`
  height: 400px;
  font-family: 'Nunito', sans-serif;
  font-size: 15px;
  color: #646464;
  position: sticky;
  top: 30px;
`

const SidebarWrapper = styled.div`
  
`

const ButtonsWrapper = styled.div`
  button:not(:last-child) {
    margin-top: 10px;
    margin-right: 5px;
    display: inline-block;
    margin-bottom: 7px;
  }
`

const Block = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

class Sidebar extends Component {
  render() {
    return(
      <SidebarWrapper>
        <FiltersWrapper>
          <Block>
            Tipo de contratação:
            <ButtonsWrapper>
              <TogglabeButton text="PJ"/>
              <TogglabeButton text="CLT"/>
              <TogglabeButton text="Estágio"/>
              <TogglabeButton text="Freelance"/>
            </ButtonsWrapper>
          </Block>

          <Block>
            Nível de experiência:
            <ButtonsWrapper>
              <TogglabeButton text="Júnior"/>
              <TogglabeButton text="Pleno"/>
              <TogglabeButton text="Sênior"/>
            </ButtonsWrapper>
          </Block>
        </FiltersWrapper>
      </SidebarWrapper>
    )
  }
}

export default Sidebar
