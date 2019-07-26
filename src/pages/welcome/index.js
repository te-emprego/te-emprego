import React from 'react';

import logo from '@images/Logo.svg';
import right from '@images/fx.svg';
import bottom from '@images/fx_bottom.svg';

import { RightEffect, BottomEffect } from '../../globalStyles/effects';

import { Root, HeaderLogin, CenteredWrapper, StyledLink } from './styles';

const Welcome = () => (
  <Root>
    <HeaderLogin>
      <img src={logo} alt="Logo Te Emprego" />
    </HeaderLogin>
    <RightEffect>
      <img src={right} alt="right effect" />
    </RightEffect>

    <CenteredWrapper>
      <h1>Que legal!</h1>
      <p>Agora, escolha a opção que se enquadra melhor às suas expectativas.</p>

      <div>
        <StyledLink to="/company-register">
          <span>quero publicar vagas</span>
        </StyledLink>
        <StyledLink to="/user-register">
          <span>quero publicar vagas</span>
        </StyledLink>
      </div>
    </CenteredWrapper>

    <BottomEffect>
      <img src={bottom} alt="bottom effect" />
    </BottomEffect>
  </Root>
);

export default Welcome;
