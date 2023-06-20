import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenReaderService {
  private speechSynthesis: SpeechSynthesis;
  private speechUtterance: SpeechSynthesisUtterance;

  constructor() {
    this.speechSynthesis = window.speechSynthesis;
    this.speechUtterance = new SpeechSynthesisUtterance();
  }

  speak(text: string): void {
    this.speechUtterance.text = text;
    this.speechSynthesis.speak(this.speechUtterance);
  }

  pause(): void {
    this.speechSynthesis.pause();
  }

  resume(): void {
    this.speechSynthesis.resume();
  }

  stop(): void {
    this.speechSynthesis.cancel();
  }
}
