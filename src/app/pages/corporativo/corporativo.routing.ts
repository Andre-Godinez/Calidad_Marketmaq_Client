import { Routes, RouterModule }  from '@angular/router';

import { CorporativoComponent } from './corporativo.component';
// import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: CorporativoComponent
  }
];

export const routing = RouterModule.forChild(routes);
