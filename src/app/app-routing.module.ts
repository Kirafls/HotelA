import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';


const routes: Routes = [
  {path:"lista",component:ListadoClientesComponent},
  {path:"alta",component:AltaClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
