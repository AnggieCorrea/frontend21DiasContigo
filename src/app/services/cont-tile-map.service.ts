import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContTileMapService {
  constructor() {}

  cargar() {
    let script2 = document.createElement('script');
    script2.src = 'https://kaboomjs.com/lib/0.5.0/kaboom.js';
    let script = document.createElement('script');
    script.src = './assets/js/contemplationTileMap.js';
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(script2);
    body.appendChild(script);
  }
}
