import { FC } from 'react';
import { LayoutGeneralFooterI } from './';

export const LayoutGeneralFooter: FC<LayoutGeneralFooterI> = ({
	height,
	width,
}) => {
	return (
		<footer
			className={`${width} ${height} flex justify-center items-center bg-white bg-opacity-90`}
		>
			<p>Todos los derechos reservados</p>
		</footer>
	);
};
