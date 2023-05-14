import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from './../cliente.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/service/aletify.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  cliente!: Cliente;
  grupos!: Grupo[];
  ban:boolean=false;
  formularioAlta = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(4)]),
    telefono: new FormControl('',[Validators.required, Validators.minLength(10)]),
    habitacion: new FormControl('',[Validators.required, Validators.max(50), Validators.min(1)]),
    personas: new FormControl('',[Validators.required, Validators.max(4)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    fecha: new FormControl('',Validators.required)
  });

  constructor(private clientesService: ClientesService,public alertifyconfim:AlertifyService,public alertifyservice:AlertifyService) { 
  }

  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }
  nuevoCliente(): void {
    if (this.formularioAlta.valid) {
      this.clientesService.agregarCliente(this.cliente);
      this.cliente = this.clientesService.nuevoCliente();
      this.ban=true;      
    }
    if(this.ban==false){
      this.alerr("Faltan validar campos");
    }
    if(this.ban==true){
      this.alsuc("Reservacion realizada");
      this.formularioAlta.disable();
      
    }
  }
  alerr(mesnaje:string){
    this.alertifyservice.error(mesnaje);
  }
  alsuc(mesnaje:string){
    this.alertifyservice.success(mesnaje)
  }
//CODIGO PARA MANEJAR LA FUNCIONABILIDAD DEL CALENDARIO MEN
  selectedDate: Date = new Date();
   dia:any;
   mes:any;
   anio:any;
   fecha:any;
   json:any;
    
  
   
  onDateSelected(event: any) {
    const inputValue = event.target.value;
    this.selectedDate = new Date(inputValue);
    this.dia = this.selectedDate.getDate();
    this.mes = this.selectedDate.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
    this.anio = this.selectedDate.getFullYear();
    //AQUI SE GUARDA LA FEHCA EN UN json
    this.json=JSON.stringify({
      dia: this.dia,
      mes: this.mes,
      anio: this.anio
    });

   
    console.log(this.json);//VERIFICA CONSOLA EN CASO DE QUE TENGAS ERRORES
  }
 

   
}
