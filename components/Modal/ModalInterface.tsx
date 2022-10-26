import { ReactNode } from 'react';

export interface ModalI {
	children: ReactNode;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	bgColor?: string;
	bgModalColor?: string;
	btnCloseStyle?: string;
	className?: string;
	paddingModal?: string;
	opacity?: string;
}
