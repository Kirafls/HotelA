import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CapturarComponent } from './capturar/capturar.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { AcercaComponent } from './acerca/acerca.component';

const routes: Routes = [
  {path:'Inicio',component:InicioComponent},
  {path:'Capturar',component:CapturarComponent},
  {path:'Mostrar',component:MostrarComponent},
  {path:'Acerca',component:AcercaComponent},
  {path:'**',pathMatch:'full',redirectTo:'Inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
