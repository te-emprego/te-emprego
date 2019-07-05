import React from 'react'
import styled from 'styled-components'
import colors from '../config/colors'

const Button = styled.button`
  border-radius: 10px;
  border: 3px solid ${colors.primary};
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 3px 15px;
  font-size: 18px;
  font-family: 'Nunito', sans-serif;
  cursor: pointer;
  outline: none;
  transition: .25s ease;

  &:not(.active) {
    background-color: ${colors.white};
    color: ${colors.primary};
  }

  &:hover,
  &:focus {
    transform: translateY(-3px);
    box-shadow: 0 3px 6px rgba(0,0,0,.15);
  }
`

class TogglableButton extends React.Component {
  state = {
    active: true
  }

  _handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <Button
        onClick={this._handleClick}
        className={this.state.active ? 'active' : 'inactive'}
      >
        { this.props.text }
      </Button>
    )
  }
}

export default TogglableButton
