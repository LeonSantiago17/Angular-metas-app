import { Component } from '@angular/core';
import { Nuevo } from '../nuevo/nuevo';
import { Meta } from '../../core/model/meta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  imports: [Nuevo],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
   metas! : Meta;
   constructor(private activatedRoute: ActivatedRoute){
    const queryParams = this.activatedRoute.snapshot.queryParams;
    this.metas = JSON.parse(queryParams['meta']) as Meta;

   }
}
