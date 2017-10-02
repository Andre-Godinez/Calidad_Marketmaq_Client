import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  Router,
  NavigationExtras,
  ActivatedRoute
} from '@angular/router';
import { AuthService } from './auth.service';
import { cuppaoauthConfig } from './cuppaoauth.config';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../theme/services/api/usuario.service';
import { LoginService } from '../../theme/services/login.service';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-cuppaoauth',
  templateUrl: './cuppaoauth.component.html',
  styleUrls: ['./cuppaoauth.component.scss']
})
export class cuppaOAuth implements OnInit {

  // configuracion de logeo
  authConfig: any = (new cuppaoauthConfig).config;

  @Input('btnlogin') btnlogin;
  @Output() pasaBtnlogin = new EventEmitter();

  formlogin: FormGroup;
  formregister: FormGroup;
  olvidocontra: FormGroup;
  logindataconfig: any = {
    'activemodal': false,
    'titulo': 'Información',
    'descripcion': 'Debe ingresar el correo y la contraseña para poder ingresar'
  };
  btnreg: string = 'logeo';
  // usuarioslogeados: Array<any> = [];

  constructor(
    public _authService: AuthService,
    private _loginService: LoginService,
    private service: UserService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  lanzar(event) {
    this.pasaBtnlogin.emit({ nameBtnlogin: this.btnlogin });
  }
  showBtnmodal(event) {
    this.logindataconfig.activemodal = event.nameBtnmodal;
  }

  login(proveedor: string, email?: string, pass?: string, pru?: any) {
    if (proveedor == 'email') {
      if (!email || !pass) {
        return;
      } else {
        let subForm: Subscription = this.service.login({
          email: email,
          password: pass
        }).subscribe((res: any) => {
          console.log('res: ', res);
          localStorage.setItem('token', JSON.stringify(res));
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('provider', proveedor);
          this._loginService.updateLogin();
        });
      }
    } else {

      this._authService.auth(proveedor, this.authConfig);

    }
  }

  register(email?: string, pass?: string, pru?: any) {
    if (!email || !pass) {
      return;
    } else {
      let subForm: Subscription = this.service.register({
        email: email,
        password: pass
      }).subscribe((res: any) => {
        console.log('res: ', res);
      });
    }
  }

  registro(email: string, pass: string, pru?: any) { }

  olvido(olvidocontra: any, pru?: any) {
    if (pru.valid) {
      let form: Subscription = this.service.resetPassword({
        email: olvidocontra
      }).subscribe((res: any) => {
        console.log('res: ', res);
      });
    }
  }

  logout() {
    this._authService.logout();
  }

  createForm(): void {
    this.formlogin = new FormGroup({
      'emaila': new FormControl('', [
        Validators.required,
        Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$')
      ]),
    });

    this.formregister = new FormGroup({
      'emaila': new FormControl('', [
        Validators.required,
        Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$')
      ]),
    });

    this.olvidocontra = new FormGroup({
      'emaila': new FormControl('', [
        Validators.required,
        Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$')
      ]),
    });

  }

}
