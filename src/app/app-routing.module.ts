import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
{path:"inicio",component:InicioComponent},  
{path:"lista",component:ListadoClientesComponent},
{path:"alta",component:AltaClienteComponent},
{path:"acerca",component:AcercaComponent},
{path:"contacto",component:ContactoComponent},
{path:"**",component:InicioComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
