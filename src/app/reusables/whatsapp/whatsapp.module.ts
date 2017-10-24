import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappComponent } from './whatsapp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WhatsappComponent
  ],
  exports: [
    WhatsappComponent
  ]
})
export class WhatsappModule { }
