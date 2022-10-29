export type ModelCargaPlanT = {
	id_carga_plan?: number;
	id_persona?: number;
	id_periodo?: number;
	id_modalidad?: number;
	id_plan?: number;
	id_ciclo?: number;
	id_grupo?: number;
	estado: string;
	fecha_inicio: Date;
	fecha_fin: Date;
	horas: number;
	tolerancia: number;
};
