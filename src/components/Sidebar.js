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
  state = {
    filtes: {
      pj: true,
      clt: true,
      estagio: true,
      freelance: true
    }
  }

  changeValue = (value) => {
    console.log(value)
  }

  render() {
    return(
      <SidebarWrapper>
        <FiltersWrapper>
          <Block>
            Tipo de contratação:
            <ButtonsWrapper>
              <TogglabeButton text="PJ" value={this.state.filtes.pj} changeValue={this.changeValue} />
              <TogglabeButton text="CLT" value={this.state.filtes.clt} changeValue={this.changeValue} />
              <TogglabeButton text="Estágio" value={this.state.filtes.estagio} changeValue={this.changeValue} />
              <TogglabeButton text="Freelance" value={this.state.filtes.freelance} changeValue={this.changeValue} />
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
