import { ContextUITypes, ContextUIStatesI } from '.';

export const ContextUIReducer = (
	state: ContextUIStatesI,
	action: ContextUITypes
): ContextUIStatesI => {
	const { type } = action;
	switch (type) {
		case 'TOOGLE_IS_OPEN_MODAL': {
			return {
				...state,
				modal: { ...state.modal, isOpenModal: action.payload },
			};
		}
		case 'SET_CONTENT_MODAL': {
			return {
				...state,
				modal: { ...state.modal, contentModal: action.payload },
			};
		}
		default: {
			return state;
		}
	}
};
