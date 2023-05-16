import { Component } from '@angular/core';
import { ApiHotelService } from './api-hotel.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  video='wl8Z11gOi4Q';

  data:any;

  constructor(private apiHotelService: ApiHotelService) { }

  ngOnInit() {
    this.recuperarDatos();
  }

  recuperarDatos() {

    //opcion1
    this.apiHotelService.retornar().subscribe(
      (result:any) => {
        this.data = result;
        console.log(this.data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error");
        } else {
          console.log("Server-side error");
        }
      }
    );
  }
}
