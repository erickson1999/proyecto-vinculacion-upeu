import { TableConfigsI } from "../../TableInterface";

export interface TableHeadI {
	heads: string[];
	configs: TableConfigsI;
	options: TableHeadOptionsI
}

export interface TableHeadOptionsI {
	enabled: boolean;
	actions: (item: any) => JSX.Element;
}
