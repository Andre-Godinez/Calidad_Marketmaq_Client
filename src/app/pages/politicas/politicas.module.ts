import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos
import { BaseModule } from '../../reusables/base/base.module';

// Componentes
import { PoliticasComponent } from './politicas.component';

// Router
import { routing } from './politicas.routing';



@NgModule({
    imports: [
        CommonModule,
        BaseModule,
        routing
    ],
    declarations: [
        PoliticasComponent
    ]
})
export class PoliticasModule { }
