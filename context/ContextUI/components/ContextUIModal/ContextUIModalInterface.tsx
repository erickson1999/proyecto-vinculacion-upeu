import { ReactNode } from 'react';

export interface ContextUIModalI {
	children: ReactNode;
	bgColor?: string;
	bgModalColor?: string;
	btnCloseStyle?: string;
	className?: string;
	paddingModal?: string;
	opacity?: string;
}
