import { Component, Renderer2 } from '@angular/core';
import { ClientesService } from '../clientes/clientes.service';
import { Cliente } from './../clientes/cliente.model';
import { AlertifyService } from 'src/app/service/aletify.service';
import { ScreenReaderService } from '../screen-reader.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  clientes!: Cliente[];
  texto:string='';
  bandera:boolean=false;
  posicion:any;
  constructor(private miServicio: ClientesService,public alertifyconfim:AlertifyService,public alertifyservice:AlertifyService, private screenReaderService: ScreenReaderService, private renderer: Renderer2) { }
  ngOnInit() {
    this.clientes = this.miServicio.getClientes();
  }
    buscar():void{
      let i=0;
      if(this.texto.trim().length===0){
        this.alerr("Aun no ha ingresado informacion");
      }
      else{
        
          for(const elemento of this.clientes){
            if(this.texto===elemento.nombre){
              this.bandera=true;
              this.posicion=i;
              break;
            }
            i++;
          }

          if(this.bandera===true){
            this.alsuc("La reservacion existe");
          }

          if(this.bandera===false){
            this.alerr("No existe ninguna reservacion con el nombre ingresado");
          }
      }
  
    }
    alerr(mensaje:string){
      this.alertifyservice.error(mensaje);
    }
    alsuc(mensaje:string){
      this.alertifyservice.success(mensaje);
    }
    cerrar( ):void{
      this.bandera=false;
    }

    //Lector de Pantalla
  speakText(): void {
    const appRootElement = document.documentElement;
    const pageContent = appRootElement.innerText;
    this.screenReaderService.speak(pageContent);
  }

  pause(): void {
    this.screenReaderService.pause();
  }

  resume(): void {
    this.screenReaderService.resume();
  }

  stop(): void {
    this.screenReaderService.stop();
  }

  //Escala Grises
  isGrayscale = false;

  toggleGrayscale() {
    this.isGrayscale = !this.isGrayscale;
  }
  
  //Links
  highlightLinks() {
    const links = document.getElementsByTagName('a');
    const highlightedColor = 'yellow';
    const normalColor = ''; // Vacío para volver al estilo normal

    for (let i = 0; i < links.length; i++) {
      const currentColor = links[i].style.backgroundColor;
      
      if (currentColor === highlightedColor) {
        this.renderer.setStyle(links[i], 'background-color', normalColor);
        this.renderer.setStyle(links[i], 'color', normalColor);
      } else {
        this.renderer.setStyle(links[i], 'background-color', highlightedColor);
        this.renderer.setStyle(links[i], 'color', 'black');
      }
    }
  }

  //cursor
  isCursorLarge = false;
  toggleCursorSize() {
    this.isCursorLarge = !this.isCursorLarge;
  
    if (this.isCursorLarge) {
      document.body.style.cursor = 'url(assets/img/cursor.png), auto';
    } else {
      document.body.style.cursor = 'default';
    }
}
}

