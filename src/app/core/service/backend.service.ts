import { Injectable } from '@angular/core';
import { Meta } from '../model/meta';


@Injectable({
  providedIn: 'root'
})
export class Backend {
  private readonly archivoLocalMetas =  'metas.json';
  private readonly archivoLocalMeta = 'meta.json';


  async leerMetas(): Promise<Meta[]> {
        const response = await fetch(this.archivoLocalMetas);
        const metas:Meta[] = await response.json();
        return metas
  }

  async pedirMetaPorId(id:number): Promise<Meta> {
    const response = await fetch(this.archivoLocalMeta);
    const meta:Meta = await response.json();
    return meta
  }

}
