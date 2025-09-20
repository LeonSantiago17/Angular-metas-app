import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vinculos } from '../../design/vinculos/vinculos';

@Component({
  selector: 'app-principal',
  imports: [RouterOutlet, Vinculos],
  templateUrl: './principal.html',
  styleUrl: './principal.scss'
})
export class Principal {

}
