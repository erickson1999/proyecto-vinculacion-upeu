import { FC, useContext } from 'react';

import { v4 as uuid } from 'uuid';

import { TableBodyI } from './';
import { ContextUI } from '../../../../context/ContextUI';
import { Button } from '../../../Button';
export const TableBody: FC<TableBodyI> = ({ data, configs, options }) => {
	const {
		modal: { setContentModal, setIsOpenModal },
	} = useContext(ContextUI);

	const ModalItemDelete = (): JSX.Element => {
		return (
			<div className="flex flex-col gap-y-4 p-2">
				<h1 className="text-center font-bold ">
					¿Estás seguro que deseas eliminar este item?
				</h1>
				<div className="flex justify-center gap-x-4 w-full">
					<Button
						background={'bg-white'}
						text={'Si'}
						padding={'px-5 py-2'}
						rounded={'rounded-full'}
						colorText={'text-primary'}
						className={'border-secondary border hover:bg-secondary'}
					></Button>
					<Button
						background={'bg-primary'}
						text={'No'}
						padding={'px-4 py-2'}
						rounded={'rounded-full'}
						colorText={
							'text-secondary border hover:bg-white hover:border-primary'
						}
					></Button>
				</div>
			</div>
		);
	};
	const ModalItemUpdate = (): JSX.Element => {
		return <div></div>;
	};

	return (
		<tbody>
			{data.map((obj, index) => {
				return (
					<tr className="hover:bg-secondary hover:bg-opacity-50" key={uuid()}>
						{configs.numeration && (
							<td className="p-2 border whitespace-nowrap">{index + 1}</td>
						)}
						{Object.values(obj).map((val) => {
							return (
								<td className="border p-1 whitespace-nowrap" key={uuid()}>
									{val}
								</td>
							);
						})}
						{options.enabled && (
							<td className="border p-2">
								<div className="flex justify-center items-center text-xl gap-x-2">
									{options.actions(obj)}
								</div>
							</td>
						)}
					</tr>
				);
			})}
		</tbody>
	);
};
