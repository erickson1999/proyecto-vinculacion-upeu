export type ContextUITypes =
	| { type: 'TOOGLE_IS_OPEN_MODAL'; payload: boolean }
	| { type: 'SET_CONTENT_MODAL'; payload: JSX.Element };
