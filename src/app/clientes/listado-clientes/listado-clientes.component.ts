import { Component, OnInit } from '@angular/core';
import { Cliente } from './../cliente.model';
import { ClientesService } from './../clientes.service';
import { CalendarOptions } from 'fullcalendar';
import multiMonthPlugin from '@fullcalendar/multimonth'
import { DatePipe } from '@angular/common';
import { timestamp } from 'rxjs';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit{
  cliente!: Cliente;
  clientes: any = [];

  constructor(public datePipe: DatePipe,private clientesService: ClientesService) {
    let res:reserva[];
  } 
  //FIREBASE
  getFormattedDate(fecha: any): string {
    if (fecha instanceof Timestamp) {
      const timestamp: Timestamp = fecha;
      const date = timestamp.toDate();
      return date.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
    } else {
      // Si no es un objeto Timestamp, asume que ya es una fecha en formato legible
      return fecha;
    }
  }
  refreshClientes() {
    this.clientesService.getCliente().subscribe((res) => {
      this.clientes = res;
    })
  }

  idCliente(id: string) {
    this.clientesService.deleteCliente(id).then((res) => {
      console.log(res);
      this.refreshClientes();
    })
  }
  ngOnInit() {
    //FIREBASE
    this.refreshClientes();
    this.cliente = this.clientesService.nuevoCliente();
    //LOCALSTORAGE
    /*this.clientes = this.clientesService.getClientes();
    console.log(this.clientes);
    let res:reserva[];
    let aux:reserva;
    for(let cliente of this.clientes){
    }
    console.log();    */
  }
  
  calendarOptions: CalendarOptions = {
    plugins: [multiMonthPlugin],
    initialView: 'multiMonthFourMonth',
    views: {
      multiMonthFourMonth: {
        type: 'multiMonth',
        duration: { months: 3 }
      }
    },
    events: [
      {
        id: "1",
        title: 'my event',
        start: '2023-05-16'
      }
    ],
    eventColor:"red",
    locale:'es',
  };
  
}
interface reserva{
  title:String;
  date:String
}