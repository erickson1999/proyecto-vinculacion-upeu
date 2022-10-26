import { ReactNode } from 'react';

export interface ContextUIProviderI {
	children: ReactNode;
}

export interface ContextUIStatesI {
	modal: { isOpenModal: boolean; contentModal: JSX.Element };
}
