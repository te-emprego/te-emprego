import React from "react";
import styled from "styled-components";
import MaterialIcon from "material-icons-react";

import logo from "../images/Logo.svg";
import right from "../images/fx.svg";
import bottom from "../images/fx_bottom.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

const Root = styled.div`
	background: linear-gradient(#8f54f8, #673ab7);
	background-image: url(${right}) no-repeat;
	height: 100vh;
	position: relative;
	overflow: hidden;
	text-align: center;

	p,
	a {
		color: #fff;
	}

	a {
		text-decoration: none;
		font-weight: bold;
	}
`;

const Header = styled.div`
	padding: 100px 80px 20px 80px;
	text-align: left;
`;

const LoginForm = styled.div`
	width: 355px;
	margin: auto;
	text-align: center;
	margin-top: 100px;

	h1,
	p {
		text-shadow: 0 2px 5px #a1a1a1;
		color: #fff;
	}

	h1 {
		text-transform: uppercase;
		font-size: 3.0rem;
		font-family: "Raleway", sans-serif;
	}

	p {
		font-family: "Nunito", sans-serif;
		color: #fff;
	}

	a {
		font-size: 0.8rem;
		color: #fff;
		text-decoration: none;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;

		input {
			width: 80%;
			padding: 10px;
			margin: 20px 0;
			border: none;
			border-bottom: 1px solid #fff;
			background: transparent;
			outline: none;
			color: #fff;
			font-family: "Nunito", sans-serif;

			&::placeholder {
				color: #f5f5f5;
				font-family: "Nunito", sans-serif;
				font-size: 1.1rem;
			}
		}

		button {
			width: 80%;
			margin: 15px 0;
			background: #fff;
			border: none;
			border-radius: 10px;
			font-size: 0.975rem;
			padding: 10px 20px;
			font-family: "Nunito", sans-serif;
			-webkit-box-shadow: 0px 2px 2px 0px #353b48;
			-moz-box-shadow: 0px 2px 2px 0px #353b48;
			box-shadow: 0px 2px 2px 0px #353b48;
			display: flex;
			align-items: center;
			justify-content: center;
			vertical-align: middle;
			cursor: pointer;
			color: #8f54f8;
			transition: .3s ease;

			span {
				text-transform: uppercase;
				font-weight: bold;
				padding: 0 10px;
			}
		}
	}
`;

const SocialLinks = styled.div`
	display: flex;
	flex-direction: column;
	margin: 35px 0;

	p {
		color: #fff;
		text-transform: uppercase;
		font-family: "Nunito", sans-serif;
		font-size: 0.775rem;
	}

	div {
		margin: 0 auto;
		display: flex;
		margin-top: 10px;
		color: #8f54f8;

		button {
			display: flex;
			align-items: center;
			justify-content: center;
			vertical-align: middle;
			border: none;
			padding: 5px 7px;
			margin: 0 10px;
			background: #fff;
			border-radius: 5px;
			cursor: pointer;
			-webkit-box-shadow: 0px 2px 2px 0px #353b48;
			-moz-box-shadow: 0px 2px 2px 0px #353b48;
			box-shadow: 0px 2px 2px 0px #353b48;

			span {
				margin-left: 5px;
			}
		}
	}
`;

const RightEffect = styled.div`
	img {
		position: absolute;
		top: 0;
		right: 0;
		width: 35%;
	}
`;

const BottomEffect = styled.div`
	width: 100%;
	margin: 0 auto;
	img {
		position: absolute;
		bottom: 0;
		left: calc(50% - 250px);
	}
`;

const Login = () => (
	<Root>
		<Header>
			<img src={logo} alt="Logo Te Emprego" />
		</Header>
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
					<MaterialIcon icon="arrow_forward" color="#8f54f8" />
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
