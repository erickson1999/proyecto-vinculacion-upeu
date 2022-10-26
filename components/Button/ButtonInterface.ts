import { MouseEventHandler } from 'react';

export interface ButtonI {
	type?: 'submit' | 'button' | 'reset';
	disabled?: boolean;
	background: string;
	text: string;
	padding: string;
	rounded: string;
	colorText: string;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
