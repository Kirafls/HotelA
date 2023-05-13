import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertifyService } from './service/aletify.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
<<<<<<< HEAD
import { ClientesModule } from './clientes/clientes.module';


=======
import { MostrarComponent } from './mostrar/mostrar.component';
import { CapturarComponent } from './capturar/capturar.component';
import { AcercaComponent } from './acerca/acerca.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> main


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    MostrarComponent,
    CapturarComponent,
    AcercaComponent,
    InicioComponent,
    NavbarComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ClientesModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
