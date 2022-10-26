import { TableConfigsI } from '../../TableInterface';

export interface TableBodyI {
	data: Object[];
	configs: TableConfigsI;
	options: TableBodyOptionsI;
}
export interface TableBodyOptionsI {
	enabled: boolean;
	actions: (item: any) => JSX.Element;
}
