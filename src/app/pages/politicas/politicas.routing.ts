import { Routes, RouterModule } from '@angular/router';

import { PoliticasComponent } from './politicas.component';
// import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    {
        path: '',
        component: PoliticasComponent
    }
];

export const routing = RouterModule.forChild(routes);
