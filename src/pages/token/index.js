import React from 'react';
import MaterialIcon from 'material-icons-react';

import logo from '@images/Logo.svg';
import right from '@images/fx.svg';
import bottom from '@images/fx_bottom.svg';

import { RightEffect, BottomEffect } from '../../globalStyles/effects';

import { Root, HeaderLogin, CenteredWrapper, TokenWrapper } from './styles';

import colors from '@/globalStyles/colors';

const Token = () => (
  <Root>
    <HeaderLogin>
      <img src={logo} alt="Logo Te Emprego" />
    </HeaderLogin>
    <RightEffect>
      <img src={right} alt="right effect" />
    </RightEffect>

    <CenteredWrapper>
      <h1>Pronto!</h1>
      <p>
        Agora olha lá na sua caixa de entrada, mandamos um email de confirmação
        com um Token.
      </p>

      <div>
        <TokenWrapper>
          <span>TEEMPREGO4564122ROCKS</span>
        </TokenWrapper>
      </div>

      <MaterialIcon icon="refresh" color={colors.white} size="50" />
    </CenteredWrapper>

    <BottomEffect>
      <img src={bottom} alt="bottom effect" />
    </BottomEffect>
  </Root>
);

export default Token;
