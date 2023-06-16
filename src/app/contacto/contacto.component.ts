import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  datos: FormGroup;
  correoFijo: string = 'proyectofinalpagweb910@gmail.com'; // Correo electrónico fijo
  ocultarInput=true;

  constructor(private httpclient: HttpClient) {
    this.datos = new FormGroup({
      asunto: new FormControl('', [Validators.required, this.filtro]),
      mensaje: new FormControl('', Validators.required)
    });
  }

  enviocorreo() {
    Notiflix.Loading.standard('Cargando');
    let params = {
      email: this.correoFijo, // Usar el correo fijo en lugar del valor del formulario
      asunto: this.datos.value.asunto,
      mensaje: this.datos.value.mensaje
    };

    console.log(params);

    this.httpclient.post('http://localhost:3000/envio', params).subscribe(resp => {
      console.log(resp);
      Notiflix.Loading.remove();
    });
  }

  filtro(control:FormControl):{[s:string]:boolean}| null {
    if(control.value==="estafa"){
    return{
    noSolano:true
    }
    }
    return null
    }

    cumpleFiltro(): boolean {
      return this.datos.get('asunto')?.hasError('noSolano') ?? false;
    }
}
