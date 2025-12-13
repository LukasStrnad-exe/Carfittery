import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Atf } from './atf/atf';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Atf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('carfittery');
}
