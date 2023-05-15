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
      grupo: 0,
      fecha: new Date(),
      hora:'',
    };
  }
  comprobar(fecha:Date,hora:string):boolean{
    let bandera:boolean=false;
   
    if(this.clientes!=null){

      const fecha_actual= new Date( );
      if(fecha.getTime()<=fecha_actual.getTime()){
       bandera=true;
      }
      else{
        for(const elemento of this.clientes){
          if(elemento.hora===hora){
            bandera=true;
            break;
          }
          
      }

      }
    }
    return bandera;
  }
  habitaciones(numero:any):boolean{
    let bandera:boolean=false;
        for(const elemento of this.clientes){
          if(elemento.habitacion==numero){
            bandera=true;
            break;
          }
          
      }
    return bandera;
  }

}



