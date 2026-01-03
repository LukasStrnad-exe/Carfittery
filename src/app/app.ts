import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Atf } from './atf/atf';
import { Services } from './services/services';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Atf, Services],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('carfittery');
}
