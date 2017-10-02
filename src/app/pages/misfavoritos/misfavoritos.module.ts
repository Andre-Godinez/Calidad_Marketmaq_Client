// // Librerias
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EasymodalModule } from '../../reusables/easymodal/easymodal.module';
// import { MaterialModule } from '@angular/material';
import {
  MdInputModule,
  MdSelectModule,
  MdCheckboxModule,
  MdIconModule,
  MdRadioModule,
  MdTabsModule,
  MdSlideToggleModule,
  MdDialogModule
} from '@angular/material';
// Routes
// import { RouterModule } from '@angular/router';
import { routing } from './misfavoritos.routing';
// import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
// import { MdInputModule, MdSelectModule, MdCheckboxModule, MdIconModule, MdRadioModule, MdDialog } from '@angular/material';
import { MisfavoritosComponent } from './misfavoritos.component';
//Module
// import { EasymodalModule } from '../easymodal/easymodal.module';
// import { PagesModule } from '../pages.module';
import { BaseModule } from '../../reusables/base/base.module';



@NgModule({
  declarations: [
    MisfavoritosComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    // Angular2FontAwesomeModule,
    MdInputModule,
    // EasymodalModule,
    // PagesModule,
    BaseModule,
    MdInputModule,
    MdSelectModule,
    MdCheckboxModule,
    MdIconModule,
    MdRadioModule,
    MdTabsModule,
    MdSlideToggleModule,
    MdDialogModule,
    EasymodalModule,
    routing
  ],
  providers: [
  ],
  exports: [
  ] // exporta los componentes importables desde otros módulos
})
export class MisfavoritosModule { }
