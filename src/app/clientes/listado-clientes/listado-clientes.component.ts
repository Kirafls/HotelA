import { Component, OnInit } from '@angular/core';
import { Cliente } from './../cliente.model';
import { ClientesService } from './../clientes.service';
import { CalendarOptions } from 'fullcalendar';
import multiMonthPlugin from '@fullcalendar/multimonth'

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit{
  clientes!: Cliente[];
  constructor(private clientesService: ClientesService) {
    let res:reserva[];
  } 

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
    console.log(this.clientes);
    let res:reserva[];
    let aux:reserva;
    for(let cliente of this.clientes){
    }
    console.log();    
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