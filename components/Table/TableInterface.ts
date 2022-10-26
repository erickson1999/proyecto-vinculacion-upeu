export interface TableI {
	data: Object[];
	heads: string[];
	configs?: TableConfigsI;
	options: TableOptionsI;
}

export interface UserI {
	dni: number | string;
	codigo: number | string;
	nombreCompleto: string;
	ciclo: number | string;
	grupo: number | string;
	correo: string;
}

export interface TableConfigsI {
	numeration: boolean;
	align?: 'text-left' | 'text-center' | 'text-right';
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
export interface TableOptionsI {
	enabled: boolean;
	actions: (item: any) => JSX.Element;
}
