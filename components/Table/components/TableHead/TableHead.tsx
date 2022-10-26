import { FC } from 'react';

import { v4 as uuid } from 'uuid';

import { TableHeadI } from './';

export const TableHead: FC<TableHeadI> = ({ heads, configs, options }) => {
	return (
		<thead className="bg-primary bg-opacity-40">
			<tr>
				{configs.numeration && <th className="border p-2">#</th>}
				{heads.map((head: string) => (
					<th className="border p-2" key={uuid()}>
						{head}
					</th>
				))}
				{options.enabled && <th className="p-2 border">Opciones</th>}
			</tr>
		</thead>
	);
};
