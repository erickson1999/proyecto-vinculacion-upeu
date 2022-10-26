import { FC } from 'react';
import { TableI } from '.';
import { TableBody, TableHead } from './';

export const Table: FC<TableI> = ({
	data,
	heads,
	configs = { numeration: false, align: 'text-center', maxWidth: 'xl' },
	options,
}) => {
	return (
		<div
			className={`overflow-auto max-h-3/4  w-4/5 lg:w-3/5 max-w-screen-${configs.maxWidth}  rounded-2xl shadow-md`}
		>
			<table className={`${configs.align} border-2 w-full`}>
				<TableHead
					heads={heads}
					configs={configs}
					options={options}
				></TableHead>
				<TableBody data={data} configs={configs} options={options}></TableBody>
			</table>
		</div>
	);
};
