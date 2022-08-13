import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper, ComponentWrapper as LoginWrapper } from "./Wrapper";

const Heading = styled.h1`
	font-family: "Arial";
	font-size: 2rem;
	font-weight: 700;
	color: white;
	line-height: 1;
	margin: 0 0 0.5rem 0;
`;

const Input = styled.input`
	min-height: 30px;
	border-radius: 8px;
	border: none;
	box-shadow: none;
	outline: none;
	width: 100%;
	padding: 8px;
`;
const EmailInput = styled(Input)``;
const PasswordInput = styled(Input)`
	margin-bottom: 0.5rem;
`;

const ButtonReset = styled.button`
	border-radius: 8px;
	outline: none;
	border: none;
	padding: 8px;
	line-height: 1.2;
	font-size: 1rem;
	font-weight: 700;
	text-transform: uppercase;
	width: 100%;
	cursor: pointer;
	transition: color 0.3s;
	&.active {
		color: purple;
	}
`;
const ForgotPassword = styled(ButtonReset)`
	background-color: transparent;
	color: white;
`;
const SignIn = styled(ButtonReset)`
	background-color: #c3c3c3;
`;
const SignInWithGoogle = styled(ButtonReset)`
	background-color: #00ff0f;
`;
const CreateAnAccount = styled(Link)`
	width: 40%;
	cursor: pointer;
	font-weight: 700;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	font-size: 1rem;
	line-height: 1.2rem;
	color: white;
`;

export const LoginScreen = () => {
	const [activeButton, setActiveButton] = useState<number>(0);
	useEffect(() => {
		activeButton !== 0 &&
			setTimeout(() => {
				setActiveButton(0);
			}, 400);
	}, [activeButton]);

	return (
		<>
			<Wrapper>
				<LoginWrapper>
					<Heading>My Reservations App</Heading>
					<EmailInput placeholder="someone@gmail.com" />
					<PasswordInput placeholder="Password" />
					<ForgotPassword
						onClick={() => {
							setActiveButton(1);
						}}
						className={clsx(activeButton === 1 && "active")}>
						Forgot your Password?
					</ForgotPassword>
					<SignIn
						onClick={() => {
							setActiveButton(2);
						}}
						className={clsx(activeButton === 2 && "active")}>
						Sign in
					</SignIn>
					<SignInWithGoogle
						onClick={() => {
							setActiveButton(3);
						}}
						className={clsx(activeButton === 3 && "active")}>
						Sign in with Google
					</SignInWithGoogle>
				</LoginWrapper>
				<CreateAnAccount
					to="create-account"
					className={clsx(activeButton === 4 && "active")}
					onClick={() => {
						setActiveButton(4);
					}}>
					Create an account
				</CreateAnAccount>
			</Wrapper>
		</>
	);
};

export default LoginScreen;
