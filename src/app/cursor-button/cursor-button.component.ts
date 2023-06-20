import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cursor-button',
  template: `
    <button (click)="toggleCursorSize()">Cambiar tamaño del cursor</button>
  `,
  styles: []
})
export class CursorButtonComponent {
  isCursorLarge = false;

  constructor(private renderer: Renderer2) { }

  toggleCursorSize() {
    this.isCursorLarge = !this.isCursorLarge;
  
    if (this.isCursorLarge) {
      document.body.style.cursor = 'url(assets/img/cursor.png), auto';
    } else {
      document.body.style.cursor = 'default';
    }
  }
  
}
