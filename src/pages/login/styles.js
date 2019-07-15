import styled from 'styled-components';
import colors from '../../globalStyles/colors';

export const Root = styled.div`
	background: linear-gradient(${colors.darken}, ${colors.primary});
	height: 100vh;
	position: relative;
	overflow: hidden;
	text-align: center;

	p,
	a {
		color: ${colors.white};
	}

	a {
		text-decoration: none;
		font-weight: bold;
	}
`;

export const HeaderLogin = styled.div`
	padding: 100px 80px 20px 80px;
	text-align: left;
`;

export const LoginForm = styled.div`
	width: 355px;
	margin: auto;
	text-align: center;
	margin-top: 50px;

	h1,
	p {
		text-shadow: 0 2px 5px ${colors.shadowText};
		color: ${colors.white};
	}

	h1 {
		text-transform: uppercase;
		font-size: 3.0rem;
		font-family: "Raleway", sans-serif;
	}

	a {
		font-size: 0.8rem;
		color: ${colors.white};
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
			border-bottom: 1px solid ${colors.white};
			background: transparent;
			outline: none;
			color: ${colors.white};
			font-family: "Nunito", sans-serif;

			&::placeholder {
				color: ${colors.white};
				font-family: "Nunito", sans-serif;
				font-size: 1.1rem;
			}
		}

		button {
			width: 80%;
			margin: 15px 0;
			background: ${colors.white};
			border: none;
			border-radius: 10px;
			font-size: 0.975rem;
			padding: 10px 20px;
			font-family: "Nunito", sans-serif;
			-webkit-box-shadow: 0px 2px 2px 0px ${colors.shadowBox};
			-moz-box-shadow: 0px 2px 2px 0px ${colors.shadowBox};
			box-shadow: 0px 2px 2px 0px ${colors.shadowBox};
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

export const SocialLinks = styled.div`
	display: flex;
	flex-direction: column;
	margin: 35px 0;

	p {
		color: ${colors.white};
		text-transform: uppercase;
		font-size: 0.775rem;
	}

	div {
		margin: 0 auto;
		display: flex;
		margin-top: 10px;
		color: ${colors.darken};

		button {
			display: flex;
			align-items: center;
			justify-content: center;
			vertical-align: middle;
			border: none;
			padding: 5px 7px;
			margin: 0 10px;
			background: ${colors.white};
			border-radius: 5px;
			cursor: pointer;
			-webkit-box-shadow: 0px 2px 2px 0px ${colors.shadowBox};
			-moz-box-shadow: 0px 2px 2px 0px ${colors.shadowBox};
			box-shadow: 0px 2px 2px 0px ${colors.shadowBox};

			span {
				margin-left: 5px;
			}
		}
	}
`;

export const RightEffect = styled.div`
	img {
		position: absolute;
		top: 0;
		right: 0;
		width: 35%;
	}
`;

export const BottomEffect = styled.div`
	width: 100%;
	margin: 0 auto;
	img {
		position: absolute;
		bottom: 0;
		left: calc(50% - 250px);
	}
`;
