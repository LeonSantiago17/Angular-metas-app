import { Component, signal } from '@angular/core';
import { Encabezamiento } from '../../layout/encabezamiento/encabezamiento';
import { Principal } from '../../layout/principal/principal';
import { Pie } from '../../layout/pie/pie';

@Component({
  selector: 'app-root',
  imports: [Encabezamiento, Principal, Pie],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('metas-app');
}
