import React, { Component } from 'react'
import styled from 'styled-components'
import MaterialIcon from 'material-icons-react'

const Wrapper = styled.div`
  .LogoWrapper {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
      border-radius: 40px;
      width: 30px;
      height: 30px;
      box-shadow: 0 1px 3px rgba(0,0,0,.55);
    }
  }

  .FeaturesWrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    .Feature {
      width: 100%;
      display: flex;
      padding-left: 5px;

      .Icon {
        margin-right: 10px;
      }

      .Description {
        font-size: 15px;
        font-family: 'Nunito', sans-serif;
        color: #646464;
      }
    }
  }
`

const source = [
  {
    icon: 'card_travel',
    description: 'PJ',
  },
  {
    icon: 'attach_money',
    description: '7.000,00 / mês'
  },
  {
    icon: 'g_translate',
    description: 'Inglês avançado'
  }
]

class JobDescription extends Component {
  render() {
    return(
      <Wrapper>
        <div className="LogoWrapper">
          <img src={this.props.employer.logo} alt={this.props.employer.name}/>
          <div className="Name">{this.props.employer.name}</div>
        </div>

        <div className="FeaturesWrapper">
          <div className="Feature">
            <div className="Icon">
              <MaterialIcon icon="card_travel" color="#ACACAC" size={15} />
            </div>
            <div className="Description">
              {this.props.features.contract}
            </div>
          </div>
          <div className="Feature">
            <div className="Icon">
              <MaterialIcon icon="attach_money" color="#ACACAC" size={15} />
            </div>
            <div className="Description">
              {this.props.features.salary}
            </div>
          </div>
          <div className="Feature">
            <div className="Icon">
              <MaterialIcon icon="g_translate" color="#ACACAC" size={15} />
            </div>
            <div className="Description">
              {this.props.features.englishLevel}
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default JobDescription