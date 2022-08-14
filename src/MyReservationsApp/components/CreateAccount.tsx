import { useRef } from "react";
import styled from "styled-components";
import { Wrapper, ComponentWrapper as CreateAccountWrapper } from "./Wrapper";
import { Button } from "./Button";

const Headline = styled.h1`
	font-weight: 700;
	font-size: 1.2rem;
	line-height: 1.2;
	width: 100%;
	border-bottom: 1px solid gray;
	color: white;
	padding: 0 0 8px 0;
	margin-top: 0;
`;

const InputSection = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
`;

const Description = styled.label`
	font-weight: 500;
	font-size: 1rem;
	line-height: 1.2;
	color: white;
	flex: 1;
`;

const Input = styled.input`
	border-radius: 8px;
	padding: 8px;
	height: 20px;
	border: none;
	outline: none;
	font-weight: 500;
	flex: 1;
`;

const BioInput = styled.textarea`
	min-height: 100px;
	border-radius: 8px;
	padding: 8px;
	height: 20px;
	border: none;
	outline: none;
	font-weight: 500;
	flex: 1;
`;

const SubmitButton = styled(Button)``;

export const CreateAccount = () => {
	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const confirmPasswordRef = useRef(null);
	const bioRef = useRef(null);

	return (
		<Wrapper>
			<CreateAccountWrapper>
				<Headline>Create an Account</Headline>
				<InputSection>
					<Description htmlFor="firstname">First Name:</Description>
					<Input
						ref={firstNameRef}
						type="text"
						placeholder="Josh"
						id="firstname"
					/>
				</InputSection>
				<InputSection>
					<Description htmlFor="lastname">Last Name:</Description>
					<Input
						ref={lastNameRef}
						type="text"
						id="lastname"
						placeholder="Meiser"
					/>
				</InputSection>
				<InputSection>
					<Description htmlFor="email">Email Address:</Description>
					<Input
						ref={emailRef}
						type="email"
						id="email"
						placeholder="jm@joshuameiser.de"
					/>
				</InputSection>
				<InputSection>
					<Description htmlFor="password">Password:</Description>
					<Input ref={passwordRef} id="password" type="password" />
				</InputSection>
				<InputSection>
					<Description htmlFor="confirmpasword">Confirm Password:</Description>
					<Input
						ref={confirmPasswordRef}
						id="confirmpassword"
						type="password"
					/>
				</InputSection>
				<InputSection>
					<Description htmlFor="bio">Bio:</Description>
					<BioInput
						id="bio"
						ref={bioRef}
						placeholder="Tell others a little bit about yourself!"
					/>
				</InputSection>
				<SubmitButton onClick={() => {}} backgroundColor="#00ff3f">
					Create Account
				</SubmitButton>
			</CreateAccountWrapper>
		</Wrapper>
	);
};

export default CreateAccount;
