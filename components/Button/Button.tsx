import { FC } from 'react';
import { ButtonI } from '.';

export const Button: FC<ButtonI> = ({
	background,
	padding,
	rounded,
	text,
	className = '',
	colorText,
	type = 'submit',
	disabled,
	onClick,
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`${background} ${padding} ${rounded} ${colorText} ${className}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};
