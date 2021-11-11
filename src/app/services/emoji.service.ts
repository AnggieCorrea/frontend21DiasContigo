import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmojiService {
  constructor() {}

  cargar() {
    let script = document.createElement('script');
    script.src = './assets/js/emoji.js';
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(script);
  }
}
