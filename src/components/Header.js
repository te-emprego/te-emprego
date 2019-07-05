import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../images/Logo.svg'
import Container from './Container'

const Wrapper = styled.div`
  color: #ffffff;
  height: 86px;
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  
`

class Header extends Component {
  render() {
    return(
      <Wrapper>
        <Container>
          <Logo src={logo}/>
        </Container>
      </Wrapper>
    )
  }
}

export default Header
