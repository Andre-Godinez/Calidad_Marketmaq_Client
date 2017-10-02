import { Routes, RouterModule }  from '@angular/router';

import { MisfavoritosComponent } from './misfavoritos.component';
// import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: MisfavoritosComponent
  }
];

export const routing = RouterModule.forChild(routes);
