import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from './../cliente.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  cliente!: Cliente;
  grupos!: Grupo[];

  formularioAlta = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(4)]),
    telefono: new FormControl('',[Validators.required, Validators.minLength(10)]),
    habitacion: new FormControl('',[Validators.required, Validators.max(50)]),
    personas: new FormControl('',[Validators.required, Validators.max(4)]),
    mail: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    if (this.formularioAlta.valid) {
      this.clientesService.agregarCliente(this.cliente);
      this.cliente = this.clientesService.nuevoCliente();
    } 
  }
}
