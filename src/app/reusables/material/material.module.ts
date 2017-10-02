import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
/* import { BrowserAnimationsModule } from '@angular/platform-browser/animations' */
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdSelectModule,
    MdCheckboxModule,
    MdIconModule,
    MdRadioModule,
    MdDialogModule,
    MdTabsModule,
    MdSlideToggleModule,
    NoopAnimationsModule
  ],
  exports: [
    MdInputModule,
    MdSelectModule,
    MdCheckboxModule,
    MdIconModule,
    MdRadioModule,
    MdDialogModule,
    MdTabsModule,
    MdSlideToggleModule
  ]
})
export class MaterialModule { }
