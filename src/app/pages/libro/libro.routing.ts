import { Routes, RouterModule }  from '@angular/router';

import { LibroComponent } from './libro.component';
// import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: LibroComponent
  }
];

export const routing = RouterModule.forChild(routes);