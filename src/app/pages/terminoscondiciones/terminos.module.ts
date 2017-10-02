import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos
import { BaseModule } from '../../reusables/base/base.module';

// componentes
import { TerminoscondicionesComponent } from './terminoscondiciones.component';

// routers
import { routing } from './terminos.routing';


@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    routing
  ],
  declarations: [
    TerminoscondicionesComponent
  ]
})
export class TerminosModule { }
