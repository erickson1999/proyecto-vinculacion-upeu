import { FC } from 'react';
import { ModalI } from './ModalInterface';

export const Modal: FC<ModalI> = ({
	isOpen,
	setIsOpen,
	children,
	className = '',
	bgColor = 'bg-primary',
	bgModalColor = 'bg-white',
	btnCloseStyle = 'bg-primary py-1 px-3 rounded-full text-xl text-secondary font-bold',
	paddingModal = 'p-4',
	opacity = 'bg-opacity-20 ',
}) => {
	return isOpen ? (
		<div
			className={`fixed top-0 lef-0 w-screen h-screen flex justify-center items-center ${opacity} ${bgColor} z-50 `}
		>
			<div
				className={`blur-0 ${paddingModal} rounded-md ${bgModalColor} ${className}`}
			>
				<div className="w-full flex justify-end">
					<button
						className={btnCloseStyle}
						onClick={() => {
							setIsOpen(!isOpen);
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
