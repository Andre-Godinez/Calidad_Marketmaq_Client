import { Routes, RouterModule } from '@angular/router';

import { TerminoscondicionesComponent } from './terminoscondiciones.component';
// import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: TerminoscondicionesComponent
  }
];

export const routing = RouterModule.forChild(routes);
