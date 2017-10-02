import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking.component';
import { HttpModule } from '@angular/http';
import { RankingService } from '../../theme/services/api/ranking.service';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    // Angular2FontAwesomeModule,
    MdInputModule,
    // EasymodalModule,
    // PagesModule,

    MdInputModule,
    MdSelectModule,
    MdCheckboxModule,
    MdIconModule,
    MdRadioModule,
    MdTabsModule,
    MdSlideToggleModule,
    MdDialogModule
  ],
  declarations: [
    RankingComponent
  ],
  exports: [
    RankingComponent
  ],
  providers: [
    RankingService
  ]
})
export class RankingModule { }
