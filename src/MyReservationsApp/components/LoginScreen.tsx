import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper, ComponentWrapper as LoginWrapper } from "./Wrapper";
import { ForgotPassword as ForgotPasswordComponent } from "./ForgotPassword";
import { Button } from "./Button";

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

const ForgotPassword = styled(Button)`
	background-color: transparent;
	color: white;
`;
const SignIn = styled(Button)``;
const SignInWithGoogle = styled(Button)``;
const CreateAnAccount = styled(Link)`
	width: 40%;
	cursor: pointer;
	font-weight: 700;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	font-size: 1rem;
	line-height: 1.2;
	color: white;
`;

export const LoginScreen = () => {
	const [activeButton, setActiveButton] = useState<number>(0);
	const [showForgotPassword, setShowForgotPassword] = useState(false);
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
						backgroundColor="rgba(0,0,0,0)"
						onClick={() => {
							setActiveButton(1);
							setShowForgotPassword(true);
						}}
						className={clsx(activeButton === 1 && "active")}>
						Forgot your Password?
					</ForgotPassword>
					<SignIn
						backgroundColor="#c3c3c3"
						onClick={() => {
							setActiveButton(2);
						}}
						className={clsx(activeButton === 2 && "active")}>
						Sign in
					</SignIn>
					<SignInWithGoogle
						backgroundColor="#00ff0f"
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
			<ForgotPasswordComponent
				visible={showForgotPassword}
				setVisible={setShowForgotPassword}
			/>
		</>
	);
};

export default LoginScreen;
