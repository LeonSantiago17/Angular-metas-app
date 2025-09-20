import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '../core/model/meta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metas',
  imports: [],
  templateUrl: './metas.html',
  styleUrl: './metas.scss'
})
export class Metas implements OnInit{
    @Input()
    meta! : Meta;
    alcanzado! : number;
    constructor(private router:Router){}

    ngOnInit():void{
       this.alcanzado = this.meta.completado / this.meta.meta *100;
    }

    editarMetas(meta:Meta){
      const queryParams = JSON.stringify(meta);
      this.router.navigate(['/editar'], {queryParams :{meta: queryParams } });
    }
}
