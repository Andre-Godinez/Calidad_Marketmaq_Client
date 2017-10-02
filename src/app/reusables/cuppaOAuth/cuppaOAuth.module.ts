import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cuppaOAuth } from './cuppaoauth.component';
import { AuthService } from './auth.service';
import { ServerURLInterceptor } from './interceptor';
import { InterceptorService } from 'ng2-interceptors';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EasymodalModule } from '../easymodal/easymodal.module';
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
// import { MaterialModule } from '../../reusables/material/material.module';
// import { LoginService } from '../../theme/services/login.service';

export function interceptorFactory(xhrBackend: XHRBackend,
  requestOptions: RequestOptions,
  serverURLInterceptor: ServerURLInterceptor) { // Add it here

  let service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(serverURLInterceptor); // Add it here
  return service;
}

@NgModule({
  imports: [
    // MaterialModule,
    MdInputModule,
    MdSelectModule,
    MdCheckboxModule,
    MdIconModule,
    MdRadioModule,
    MdTabsModule,
    MdSlideToggleModule,
    MdDialogModule,
    CommonModule,
    EasymodalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [cuppaOAuth],
  exports: [cuppaOAuth],
  providers: [
    AuthService,
    ServerURLInterceptor,
    {
      provide: InterceptorService,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions, ServerURLInterceptor]
    }

  ]
})
export class CuppaOAuthModule { }
