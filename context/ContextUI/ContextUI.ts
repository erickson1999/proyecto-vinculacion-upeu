import { createContext } from 'react';

interface ContextUIModalI {
	isOpenModal: boolean;
	setIsOpenModal: (payload: boolean) => void;
	setContentModal: (payload: JSX.Element) => void;
}

interface ContextUII {
	modal: ContextUIModalI;
}

export const ContextUI = createContext({} as ContextUII);
