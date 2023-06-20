import { NgModule, isDevMode } from '@angular/core';
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
import { DatePipe } from '@angular/common';
//FIREBASE
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ClientesService } from './clientes/clientes.service';

//LLAVE PARA LA CONEXIÓN FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDgeqP8EYO04pDf2Z1LamtT_CnfFZEZRAg",
  authDomain: "database-1362e.firebaseapp.com",
  projectId: "database-1362e",
  storageBucket: "database-1362e.appspot.com",
  messagingSenderId: "94224887601",
  appId: "1:94224887601:web:8e92ce3adb5dcbab09ca10"
};;
import { ServiceWorkerModule } from '@angular/service-worker'


@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    InicioComponent,
    NavbarComponent,
    DomseguroPipe,
    ContactoComponent,
   
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
    AlertifyService,
    ClientesService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
