import { FC } from 'react';
import { LayoutGeneralNavbarI } from './';
import { AiOutlineMenu } from 'react-icons/ai';

export const LayoutGeneralNavbar: FC<LayoutGeneralNavbarI> = ({
	width,
	height,
	setIsOpenSidebar,
}) => {

	const openSidebar = () => {
		setIsOpenSidebar(true);
	}

	return (
		<nav className={`${width} ${height} bg-primary shadow-xl bg-opacity-90`}>
			<button
				onClick={openSidebar}
			>
				<AiOutlineMenu className="text-6xl my-1 ml-1 text-secondary"></AiOutlineMenu>
			</button>
		</nav>
	);
};
