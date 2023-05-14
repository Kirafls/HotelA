export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    nPersona: number;
    nTel: number;
    habitacion: number;
    pago: number;
    grupo: number;
    fecha: Date;
}

export interface Grupo {
    idGrupo: number;
    nombre: string;
}