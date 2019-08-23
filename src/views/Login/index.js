import React from 'react';
import MaterialIcon from 'material-icons-react';
import { Link, withRouter } from 'react-router-dom';

import logo from '@assets/images/Logo.svg';
import right from '@assets/images/fx.svg';
import bottom from '@assets/images/fx_bottom.svg';

import colors from '@/globalStyles/colors';

import { RightEffect, BottomEffect } from '@/globalStyles/effects';
import { Input } from '@/globalStyles/input';

import { Root, HeaderLogin, LoginForm } from './styles';

const Login = ({ history }) => {
  const handleSubmit = e => {
    e.preventDefault();
    history.push('/');
  };

  return (
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

        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="email" />
          <Input type="password" placeholder="senha" />
          <button type="submit">
            <MaterialIcon icon="arrow_forward" color={colors.primary} />
            <span>Entrar</span>
          </button>
        </form>
        <a href="/">esqueci minha senha</a>
      </LoginForm>

      {/* <SocialLinks>
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
      </SocialLinks> */}

      <p>
        Não tem uma conta?
        <Link to="/welcome">
          <span> Crie uma</span>
        </Link>
      </p>

      <BottomEffect>
        <img src={bottom} alt="bottom effect" />
      </BottomEffect>
    </Root>
  );
};

export default withRouter(Login);
