import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerComponente } from './components/primer-componente/primer-componente';
import { SegundoComponente } from './components/segundo-componente/segundo-componente';
import { TercerComponente } from './components/tercer-componente/tercer-componente';
import { CuartoComponente } from './components/cuarto-componente/cuarto-componente';
import { QuintoComponente } from './components/quinto-componente/quinto-componente';
import { SextoComponente } from './components/sexto-componente/sexto-componente';

@Component({
  imports: [RouterOutlet, PrimerComponente,SegundoComponente, TercerComponente, CuartoComponente , QuintoComponente,SextoComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app_uno');
}
