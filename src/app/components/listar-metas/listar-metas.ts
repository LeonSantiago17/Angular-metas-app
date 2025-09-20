import { Component, inject, OnInit } from '@angular/core';
import { Metas } from '../../metas/metas';
import { Lista } from '../../core/service/lista.service';
import { Meta } from '../../core/model/meta';

@Component({
  selector: 'app-listar-metas',
  imports: [Metas],
  templateUrl: './listar-metas.html',
  styleUrl: './listar-metas.scss'
})
export class ListarMetas implements OnInit{
    metasMock = inject(Lista);
    listaMeta : Meta[];
    metasBack!:Meta[];

    constructor(){
        this.listaMeta = this.metasMock.obtenerMock();
    }

    ngOnInit(): void {
        this.metasMock.obtenerMetasBack().then((data:Meta[])=>{
          this.metasBack = data
        });
    }
}
