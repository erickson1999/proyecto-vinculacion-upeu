import { ReactNode } from 'react';

export interface LayoutGeneralI {
	children: ReactNode;
	navbarWidth?: string;
	navbarHeight?: string;
	footerWidth?: string;
	footerHeight?: string;
	mainHeight?: string;
	mainWidth?: string;
}
