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
}

export interface Grupo {
    idGrupo: number;
    nombre: string;
}