import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-link-highlighter',
  templateUrl: './link-highlighter.component.html',
  styleUrls: ['./link-highlighter.component.css']
})
export class LinkHighlighterComponent {
  constructor(private renderer: Renderer2) { }

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
}

