export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    habitacion: number;
    pago: number;
    grupo: number;
}

export interface Grupo {
    id: number;
    nombre: string;
}