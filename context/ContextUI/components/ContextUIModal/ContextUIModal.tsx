import { FC, useContext } from 'react';
import { ContextUIModalI } from './ContextUIModalInterface';
import { ContextUI } from '../..';

export const ContextUIModal: FC<ContextUIModalI> = ({
	children,
	className = '',
	bgColor = 'bg-primary',
	bgModalColor = 'bg-white',
	btnCloseStyle = 'bg-primary py-1 px-3 rounded-full text-lg text-secondary font-bold',
	paddingModal = 'p-8',
	opacity = 'bg-opacity-20 ',
}) => {
	const {
		modal: { isOpenModal, setIsOpenModal },
	} = useContext(ContextUI);

	return isOpenModal ? (
		<div
			className={`fixed top-0 lef-0 w-screen h-screen flex justify-center items-center ${opacity} ${bgColor} z-50 `}
		>
			<div
				className={`blur-0 ${paddingModal} w-11/12 max-w-lg rounded-md ${bgModalColor} ${className}`}
			>
				<div className="w-full flex justify-end">
					<button
						className={btnCloseStyle}
						onClick={() => {
							setIsOpenModal(false);
						}}
					>
						X
					</button>
				</div>
				{children}
			</div>
		</div>
	) : (
		<></>
	);
};
