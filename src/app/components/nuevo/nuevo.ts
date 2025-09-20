import { Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Meta } from '../.././core/model/meta';
import { Lista } from '../../core/service/lista.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-nuevo',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo.html',
  styleUrl: './nuevo.scss'
})
export class Nuevo implements OnChanges{
  @Input()
  metaIng?:Meta;
  metasEnviar! : Meta;
  metaService = inject(Lista);
  formularioDeMetas = new FormGroup({
  id : new FormControl(),
  detalles : new FormControl(),
  periodo: new FormControl(),
  eventos: new FormControl(),
  icono: new FormControl(),
  meta: new FormControl(),
  plazo: new FormControl(),
  completado: new FormControl()
  })

  frecuencia = ['dia', 'semana', 'mes', 'año'];
  iconos = ['✈️', '📚', '🏃🏿', '🧑‍🔧'];
  constructor(private router:Router){ }
    ngOnChanges(changes: SimpleChanges): void {
        if(this.metaIng){
          this.formularioDeMetas.setValue({
            id : this.metaIng.id,
            detalles : this.metaIng.detalles,
            periodo : this.metaIng.periodo,
            eventos : this.metaIng.eventos,
            icono : this.metaIng.icono,
            meta : this.metaIng.meta,
            plazo : this.metaIng.plazo,
            completado : this.metaIng.completado
        })
        }
    }

      llenarMetaAEnviar(){
    this.metasEnviar = {
         'id' : this.metaIng? this.metaIng.id: Math.random().toString(),
         'detalles' : this.formularioDeMetas.value.detalles!,
         'periodo' : this.formularioDeMetas.value.periodo!,
         'eventos' : this.formularioDeMetas.value.eventos!,
         'icono' : this.formularioDeMetas.value.icono!,
         'meta' : this.formularioDeMetas.value.meta!,
         'plazo' : this.formularioDeMetas.value.plazo!,
         'completado' : this.formularioDeMetas.value.completado!

    }
  }

      subirForm(){
    this.llenarMetaAEnviar();
    this.metaService.crearMeta(this.metasEnviar);
    this.router.navigate(['/']);
    }

  actualizarMetas(){
    this.llenarMetaAEnviar();
    this.metaService.actualizarMeta(this.metasEnviar);
    this.router.navigate(['/']);
  }

  eliminarMetas(){
    this.llenarMetaAEnviar();
    this.metaService.eliminarMeta(this.metasEnviar);
    this.router.navigate(['/']);
  }
  pagInicial(){
    this.router.navigate(['/']);
  }
  }


