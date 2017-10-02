/* import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../../../../theme/services/login.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logindataconfig: any = {
    'activemodal': false,
    'titulo': 'Información',
    'descripcion': 'Debe ingresar el correo y la contraseña para poder ingresar'
  };

  @Input('btnlogin') btnlogin;
  @Output() pasaBtnlogin = new EventEmitter();

  btnreg: string = 'logeo';

  private authServerBaseUrl = 'http://34.227.201.151:8080';
  private config = {
    'loginRoute': 'login',
    'facebook': {
      'authEndpoint': this.authServerBaseUrl + '/auth/facebook',
      'clientId': '1284683191579560',
      'redirectURI': 'http://localhost:4200/pe/home'
    },
    'google': {
      'authEndpoint': this.authServerBaseUrl + '/auth/google',
      'clientId': '1059623871602-fuvr36gooa28v7hk06p8ft09hosbfffi.apps.googleusercontent.com',
      'redirectURI': 'http://localhost:4200/pe/home'
    }
  }

  constructor(public _ls: LoginService) { }

  ngOnInit() {
  }

  //this.authService.auth('google',this.authConfig);

  lanzar(event) {
    // Usamos el método emit
    this.pasaBtnlogin.emit({ nameBtnlogin: this.btnlogin });
  }

}
 */
