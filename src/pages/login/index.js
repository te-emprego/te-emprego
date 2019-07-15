import React from 'react';
import MaterialIcon from 'material-icons-react';
import colors from '../../globalStyles/colors';

import { Root, HeaderLogin, RightEffect, LoginForm, SocialLinks, BottomEffect } from './styles';
import logo from '../../assets/images/Logo.svg';

import right from '../../assets/images/fx.svg';
import bottom from '../../assets/images/fx_bottom.svg';
import linkedin from '../../assets/images/linkedin.svg';
import github from '../../assets/images/github.svg';

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
					<MaterialIcon icon="arrow_forward" color={colors.darken} />
					<span>Entrar</span>
				</button>
			</form>
			<a href="/">esqueci minha senha</a>
		</LoginForm>

		<SocialLinks>
			<p>ou invés disso, faça login com</p>
			<div>
				<button>
					<img src={linkedin} alt="Linkedin" />
					<span>LinkedIn</span>
				</button>
				<button>
					<img src={github} alt="Linkedin" />
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
