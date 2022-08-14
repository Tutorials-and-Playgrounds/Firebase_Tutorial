import React, { MouseEventHandler, useEffect, useState } from "react";
import styled from "styled-components";
import { darken } from "polished";

export interface ButtonProps {
	onClick: MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
	className?: string;
	backgroundColor?: string;
}

const ButtonReset = styled.button<{ backgroundColor?: string }>`
	border-radius: 8px;
	outline: none;
	border: none;
	padding: 8px;
	line-height: 1.2;
	font-size: 1rem;
	font-weight: 700;
	text-transform: uppercase;
	width: 100%;
	overflow: hidden;
	position: relative;
	cursor: pointer;
	transition: color 0.3s;
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : ""};
`;

const RippleEffect = styled.span<{
	x: number;
	y: number;
	backgroundColor?: string;
}>`
	width: 30%;
	height: 100%;
	position: absolute;
	background: ${(props) =>
		darken(
			"0.3",
			props.backgroundColor ? props.backgroundColor : "rgba(0,0,0,0)"
		)};
	display: block;
	content: "";
	z-index: 2;
	border-radius: 9999px;
	opacity: 1;
	animation: 2s ease 1 forwards ripple-effect;
	left: ${(props) => props.x}px;
	top: ${(props) => props.y}px;

	@keyframes ripple-effect {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(10);
			opacity: 0.375;
		}
		100% {
			transform: scale(35);
			opacity: 0;
		}
	}
`;

export const Button = (props: ButtonProps) => {
	const [coords, setCoords] = useState({ x: 1, y: -1 });
	const [isRippling, setIsRippling] = useState(false);

	useEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRippling(true);
			setTimeout(() => setIsRippling(false), 300);
		} else setIsRippling(false);
	}, [coords]);

	useEffect(() => {
		if (!isRippling) setCoords({ x: -1, y: -1 });
	}, [isRippling]);

	return (
		<ButtonReset
			className={props.className}
			backgroundColor={props.backgroundColor}
			onClick={(e) => {
				const target = e.target as HTMLElement;
				const rect = target.getBoundingClientRect();
				setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
				props.onClick(e);
			}}>
			{isRippling && (
				<RippleEffect
					x={coords.x}
					y={coords.y}
					backgroundColor={props.backgroundColor}
				/>
			)}
			{props.children}
		</ButtonReset>
	);
};

export default Button;
