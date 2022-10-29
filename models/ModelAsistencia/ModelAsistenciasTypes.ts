export type ModelAsistenciaT = {
	id_asistencia?: string;
	id_plan_participante?: number;
	fecha_sesion: Date;
	fecha_asis: Date;
	fecha_termino: Date;
	estado: string;
	nota: number;
	horas: number;
	evidencia: string;
};
