import { MutableRefObject, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 32px 32px 0 32px;
`;

const Button = styled.button`
	width: 100px;
	height: 42px;
	background-color: purple;
	border: none;
	border-radius: 8px;
	flex-grow: 1;
`;

const Input = styled.input`
	color: white;
	background-color: transparent;
	border: none;
	outline: none;
	box-shadow: none;
	border-bottom: 1px solid gray;
	flex-grow: 10;
`;

const ContentBox = styled.div`
	height: 42px;
	min-width: 100px;
	background-color: aqua;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	color: black;
`;

const ContentWrapper = styled.div`
	background-color: rgba(0, 190, 255, 0.2);
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 16px;
	padding: 16px 32px;
	margin: 32px;
	border-radius: 8px;
	flex-grow: 1;
	overflow: scroll;
	overflow-x: hidden;
	scrollbar-color: red;
	&::-webkit-scrollbar {
		// color: red yellow;
		background-color: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 190, 255, 0.2);
	}
`;

export const MessageSection = () => {
	const message = useRef<HTMLInputElement>(null);

	const [list, setList] = useState<string[]>([]);

	const addListItem = (message: string) => {
		setList((currentList) => [...currentList, message]);
	};
	return (
		<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
			<Wrapper>
				<Input type="text" ref={message} placeholder="Send a message..." />
				<Button
					onClick={() => {
						message.current?.value && addListItem(message.current.value);
						message.current?.focus();
					}}>
					Send
				</Button>
			</Wrapper>
			<ContentWrapper>
				{list.map((listElement, index) => {
					return (
						<ContentBox key={listElement + index}>{listElement}</ContentBox>
					);
				})}
			</ContentWrapper>
		</div>
	);
};

export default MessageSection;
