import { Component, OnInit } from '@angular/core';
import { AlertifyService } from './service/aletify.service';
import { ScreenReaderService } from './screen-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HotelA';
  constructor(public alertifyconfim:AlertifyService,public alertifyservice:AlertifyService){
    alertifyservice.success("Contenido cargado");
  }
  ngOnInit(): void {
    
  }
  alerta(){
    this.alertifyconfim.confirm("Confirmar",this.confirmar);
  }
  confirmar(){
    this.alertifyservice.success("Hecho");
    
  }
  
  //Escala Grises
  isGrayscale = false;

  toggleGrayscale() {
    this.isGrayscale = !this.isGrayscale;
  }
}
