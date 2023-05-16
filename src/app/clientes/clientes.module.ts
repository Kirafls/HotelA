import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from 'fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';

@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  providers: [
    ClientesService,
    {provide:LOCALE_ID,useValue:'es'}
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FullCalendarModule
  ],
  exports: [
    AltaClienteComponent,
    ListadoClientesComponent
  ]
})
export class ClientesModule {}
