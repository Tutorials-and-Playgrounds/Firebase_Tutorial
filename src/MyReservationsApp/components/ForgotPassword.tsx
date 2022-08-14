import clsx from "clsx";
import styled from "styled-components";

export interface ForgotPasswordProps {
	visible: boolean;
	setVisible: Function;
}

const Wrapper = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 1;
	transition: 0.3s;
	z-index: 6;
	&.disabled {
		opacity: 0;
		z-index: -1;
	}
`;

const ResetForm = styled.div`
	padding: 32px;
	background-color: #fff;
	border-radius: 8px;
	z-index: 2;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Heading = styled.h1`
	font-size: 1rem;
	font-weight: 700;
	margin: 0;
	padding: 0;
	line-height: 1.2;
	flex-grow: 1;
`;

const SendEmail = styled.button`
	background-color: #00ff0f;
	border-radius: 8px;
	outline: none;
	text-transform: uppercase;
	border: none;
	font-size: 0.875rem;
	flex-grow: 1;
	font-weight: 700;
	cursor: pointer;
	padding: 8px;
`;

const EmailInput = styled.input`
	outline: none;
	box-shadow: none;
	border: 2px solid #d3d3d3;
	border-radius: 4px;
	padding: 8px;
	::placeholder {
		color: #d3d3d3;
	}
`;

const Backdrop = styled.div`
	height: 100%;
	width: 100%;
	opacity: 0.5;
	background-color: #000;
	position: absolute;
	z-index: 1;
	cursor: pointer;
`;

export const ForgotPassword = (props: ForgotPasswordProps) => {
	return (
		<Wrapper className={clsx(!props.visible && "disabled")}>
			<ResetForm>
				<Heading>Reset Password</Heading>
				<EmailInput placeholder="Enter your email address" type="email" />
				<SendEmail>Send Email</SendEmail>
			</ResetForm>
			<Backdrop
				onClick={() => {
					props.setVisible(false);
				}}
			/>
		</Wrapper>
	);
};

export default ForgotPassword;
