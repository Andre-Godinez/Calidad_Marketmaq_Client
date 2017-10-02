import { Routes, RouterModule } from '@angular/router';

import { Maquinarias } from './maquinarias.component';
import { DetalleMaquinariaComponent } from './detmaquinaria/detalle-maquinaria.component';

/* import { BmaquinariasComponent } from './bmaquinarias.component';
import { DetmaquinariaComponent } from './detmaquinaria/detmaquinaria.component'; */

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  // { path: 'maquinarias', redirectTo: 'maquinarias/maquinarias-categoria-eq'},
  // { path: 'maquinarias/:filtro', component:  BmaquinariasComponent},
  // { path: 'maquinaria/:idmaquina', component:  DetmaquinariaComponent},
  {
    path: '', component: Maquinarias,
    /* children: [
      { path: ':filtro', component:  BmaquinariasComponent},
      { path: 'maquinaria/:idmaquina', component:  DetmaquinariaComponent}
    ]   */
  },
  {
    path: ':id',
    component: DetalleMaquinariaComponent
  }
];

export const routing = RouterModule.forChild(routes);
