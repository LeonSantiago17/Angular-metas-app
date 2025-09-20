import { Routes } from '@angular/router';
import { ListarMetas } from '../../components/listar-metas/listar-metas';
import { Nuevo } from '../../components/nuevo/nuevo';
import { Modal } from '../../components/modal/modal';

export const routes: Routes = [
  {
    path : '',
    component : ListarMetas,
    title : 'Metas App'
  },
  {
    path : 'crear',
    component : Nuevo,
    title : 'Crear Meta'
  },
  {
    path : 'editar',
    component : Modal,
    title : 'Editar Meta'
  }
];
