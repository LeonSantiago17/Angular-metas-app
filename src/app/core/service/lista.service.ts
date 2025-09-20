import { Injectable } from '@angular/core';
import { Meta } from '../model/meta';
import { Backend } from './backend.service';




@Injectable({
  providedIn: 'root'
})
export class Lista {
    metasMock : Meta[] =[];
    valorLocalStorage:any;
    constructor(private backendService:Backend){
      this.valorLocalStorage = localStorage.getItem('metas');
      if(this.valorLocalStorage === null){
        this.actualizarLocalStorage();
      }else {
        const metasCrudas = localStorage.getItem('metas');
        const metasPareseadas = JSON.parse(metasCrudas!);
        this.metasMock = metasPareseadas;
      }
    }

    actualizarLocalStorage(){
        const dataJson = JSON.stringify(this.metasMock);
        localStorage.setItem('metas', dataJson)
    }
    obtenerMock():Meta[]{
        return this.metasMock;
       }

    crearMeta(meta:Meta){
      this.metasMock.push(meta);
      this.actualizarLocalStorage();
    }

    actualizarMeta(metaActualizar: Meta){
      const indice = this.metasMock.findIndex((meta) => meta.id === metaActualizar.id);
      if(indice === -1){
        console.log('No se encontro');
      }else{
        this.metasMock[indice] = metaActualizar;
        this.actualizarLocalStorage();
      }
    }

    eliminarMeta(metaActualizar:Meta){
      const indice = this.metasMock.findIndex((meta) => meta.id === metaActualizar.id);
      if(indice === -1){
        console.log('No se encontro');
      }else{
         this.metasMock.splice(indice,1);
         this.actualizarLocalStorage();
      }

    }

    async obtenerMetasBack(): Promise<Meta[]>{
      return this.backendService.leerMetas();
    }
}
