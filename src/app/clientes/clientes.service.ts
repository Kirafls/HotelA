import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';
import { GRUPOS } from './grupo';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes: Cliente[];
  private grupos: Grupo[] = GRUPOS;

  constructor() {
    this.clientes=JSON.parse( localStorage.getItem("data") || '[]' );
  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
    localStorage.setItem('data',JSON.stringify(this.clientes));
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      apellido: '',
      correo: '',
      nPersona: 0,
      nTel: 0,
      habitacion: 0,
      pago: 0,
      grupo: 0
    };
  }
}



