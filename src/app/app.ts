import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Atf } from './atf/atf';
import { Services } from './services/services';
import { Maps } from './maps/maps';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Atf, Services, Maps],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('carfittery');
}
