import React from 'react';
import MaterialIcon from 'material-icons-react';

import logo from '@images/Logo.svg';
import left from '@images/fx_purple.svg';
import bottom from '@images/fx_bottom_purple.svg';
import linkedin from '@images/linkedin.svg';
import github from '@images/github_white.svg';

import { LeftEffect, BottomEffect } from '@/globalStyles/effects';

import {
  Root,
  HeaderLogin,
  Wrapper,
  InsideWrapper,
  RegisterWrapper,
  Form,
  Inputs,
  Location,
  StyledInput,
  Button,
  SocialLinks,
} from './styles';

import colors from '@/globalStyles/colors';

const UserRegister = () => (
  <Root>
    <HeaderLogin mobile>
      <img src={logo} alt="Logo Te Emprego" />
    </HeaderLogin>
    <LeftEffect mobile>
      <img src={left} alt="left effect" />
    </LeftEffect>

    <Wrapper>
      <InsideWrapper>
        <h1>Cadastro</h1>
        <p>Temos certeza que irá encontrar uma ótima vaga de emprego!</p>

        <RegisterWrapper>
          <Form>
            <Inputs>
              <div>
                <StyledInput type="text" placeholder="email" />
                <StyledInput type="password" placeholder="senha" />
                <StyledInput type="text" placeholder="nome completo" />
                <StyledInput type="text" placeholder="telefone" />
              </div>

              <div>
                <Location>
                  <StyledInput type="text" placeholder="estado" />
                  <StyledInput type="text" placeholder="cidade" />
                </Location>
                <StyledInput type="text" placeholder="nivel de experiência" />
                <StyledInput
                  type="text"
                  placeholder="status de busca de emprego"
                />
                <label htmlFor="upload" id="file">
                  <StyledInput
                    type="file"
                    id="upload"
                    placeholder="imagem de perfil"
                  />
                  imagem do perfil
                  <MaterialIcon icon="cloud_upload" color={colors.darken} />
                </label>
              </div>
            </Inputs>
            <div>
              <Button type="submit">Cadastrar</Button>
              <p>Ao clicar no botão acima, você declara que aceita os nossos</p>
              <a>Termos de Uso e Política de Privacidade</a>
            </div>
          </Form>
        </RegisterWrapper>

        <SocialLinks>
          <p>ou invés disso, cadastre-se com</p>
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
      </InsideWrapper>
    </Wrapper>

    <BottomEffect register>
      <img src={bottom} alt="bottom effect" />
    </BottomEffect>
  </Root>
);

export default UserRegister;
