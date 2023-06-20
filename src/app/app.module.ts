import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertifyService } from './service/aletify.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ClientesModule } from './clientes/clientes.module';
import { AcercaComponent } from './acerca/acerca.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs'; 
import { HttpClientModule } from '@angular/common/http';
import { DomseguroPipe } from './inicio/domseguro.pipe';
import {MatDividerModule} from '@angular/material/divider';
import { ContactoComponent } from './contacto/contacto.component';
import { LinkHighlighterComponent } from './link-highlighter/link-highlighter.component';
import { CursorButtonComponent } from './cursor-button/cursor-button.component'


@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    InicioComponent,
    NavbarComponent,
    DomseguroPipe,
    ContactoComponent,
    LinkHighlighterComponent,
    CursorButtonComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ClientesModule,
    MatTabsModule,
    HttpClientModule,
    MatDividerModule,
    ReactiveFormsModule
   
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
