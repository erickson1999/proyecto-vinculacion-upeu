import { FC, useReducer } from 'react';
import { ContextUIProviderI, ContextUIStatesI } from '.';
import { ContextUIModal } from './components/ContextUIModal';
import { ContextUI } from './ContextUI';
import { ContextUIReducer } from './ContextUIReducer';

const CONTEXTUI_INIT_STATE: ContextUIStatesI = {
	modal: { isOpenModal: false, contentModal: <></> },
};

export const ContextUIProvider: FC<ContextUIProviderI> = ({ children }) => {
	const [state, dispatch] = useReducer(ContextUIReducer, CONTEXTUI_INIT_STATE);

	const setIsOpenModal = (payload: boolean): void => {
		dispatch({ type: 'TOOGLE_IS_OPEN_MODAL', payload });
	};

	const setContentModal = (payload: JSX.Element): void => {
		dispatch({ type: 'SET_CONTENT_MODAL', payload });
	};

	return (
		<ContextUI.Provider
			value={{
				modal: {
					//all states modal
					...state.modal,
					//methods
					setIsOpenModal,
					setContentModal,
				},
			}}
		>
			<ContextUIModal>{state.modal.contentModal}</ContextUIModal>
			{children}
		</ContextUI.Provider>
	);
};
