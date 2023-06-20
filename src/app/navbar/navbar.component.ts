import { Component, } from '@angular/core';
import { ClientesService } from '../clientes/clientes.service';
import { Cliente } from './../clientes/cliente.model';
import { AlertifyService } from 'src/app/service/aletify.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  clientes!: Cliente[];
  texto:string='';
  bandera:boolean=false;
  posicion:any;
  constructor(private miServicio: ClientesService,public alertifyconfim:AlertifyService,public alertifyservice:AlertifyService) { }
  ngOnInit() {
    this.clientes = this.miServicio.getClientes();
  }
    buscar():void{
      let i=0;
      if(this.texto.trim().length===0){
        this.alerr("Aun no ha ingresado informacion");
      }
      else{
        
          for(const elemento of this.clientes){
            if(this.texto===elemento.nombre){
              this.bandera=true;
              this.posicion=i;
              break;
            }
            i++;
          }

          if(this.bandera===true){
            this.alsuc("La reservacion existe");
          }

          if(this.bandera===false){
            this.alerr("No existe ninguna reservacion con el nombre ingresado");
          }
      }
  
    }
    alerr(mensaje:string){
      this.alertifyservice.error(mensaje);
    }
    alsuc(mensaje:string){
      this.alertifyservice.success(mensaje);
    }
    cerrar( ):void{
      this.bandera=false;
    }
}
