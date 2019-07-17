import React from 'react';
import MaterialIcon from 'material-icons-react';
import colors from '@/globalStyles/colors';

import logo from '@images/Logo.svg';
import right from '@images/fx.svg';
import bottom from '@images/fx_bottom.svg';
import linkedin from '@images/linkedin.svg';
import github from '@images/github.svg';

import {
  Root,
  HeaderLogin,
  RightEffect,
  LoginForm,
  SocialLinks,
  BottomEffect,
} from './styles';

const Login = () => (
  <Root>
    <HeaderLogin>
      <img src={logo} alt="Logo Te Emprego" />
    </HeaderLogin>
    <RightEffect>
      <img src={right} alt="right effect" />
    </RightEffect>

    <LoginForm>
      <h1>Login</h1>
      <p>Bem-vindo novamente! </p>

      <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="senha" />
        <button type="submit">
          <MaterialIcon icon="arrow_forward" color={colors.primary} />
          <span>Entrar</span>
        </button>
      </form>
      <a href="/">esqueci minha senha</a>
    </LoginForm>

    <SocialLinks>
      <p>ou invés disso, faça login com</p>
      <div>
        <button type="button">
          <img src={linkedin} alt="LinkedIn" />
          <span>LinkedIn</span>
        </button>
        <button type="button">
          <img src={github} alt="GitHub" />
          <span>GitHub</span>
        </button>
      </div>
    </SocialLinks>

    <p>
      Não tem uma conta? <a href="/">Crie uma</a>
    </p>

    <BottomEffect>
      <img src={bottom} alt="bottom effect" />
    </BottomEffect>
  </Root>
);

export default Login;
