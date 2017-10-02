import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// modulos
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CuppaOAuthModule } from '../cuppaOAuth/cuppaOAuth.module';
// import { AuthService } from '../cuppaOAuth/auth.service';
import { RouterModule } from '@angular/router';
import { EasymodalModule } from '../easymodal/easymodal.module';

// componentes
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardMaquinaComponent } from '../card/card-maquina.component'
// import { LoginComponent } from './header/login/login.component';

// services
import { LoginService } from '../../theme/services/login.service';
// Material
// import { MaterialModule } from '../../reusables/material/material.module';

/* import { NoopAnimationsModule } from '@angular/platform-browser/animations' */
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
    NgbModule,
    CommonModule,
    EasymodalModule,
    CuppaOAuthModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdSelectModule,
    MdCheckboxModule,
    MdIconModule,
    MdRadioModule,
    MdTabsModule,
    MdSlideToggleModule,
    MdDialogModule,
    CuppaOAuthModule,
    /* NoopAnimationsModule */
    /* MaterialModule */
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    // LoginComponent,
    FooterComponent,
    CardMaquinaComponent
  ],
  providers: [
    LoginService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardMaquinaComponent
  ]
})
export class BaseModule { }
