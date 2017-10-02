import {
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { Usuario } from '../interfaces/usuario.interface';
import { UsuarioInitialize } from '../interfaces/usuario.class';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LoginService {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);

  userKey: string;
  usuarioEasymaq: any;

  isLoggedIn: boolean;
  userDefault: Usuario = new UsuarioInitialize;

  constructor(
    @Inject(PLATFORM_ID) private platform_id,
    private http: Http,
    public _router: Router) {

    if (this.isBrowser) {
      if (localStorage.getItem('token')) {
        this.usuarioEasymaq = JSON.parse(localStorage.getItem('token'));
        this.userKey = this.usuarioEasymaq.id;
      } else {
        this.usuarioEasymaq = null;
        this.userKey = null;
      }
      if (localStorage.getItem('isLoggedIn')) {
        this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
      } else {
        this.isLoggedIn = null;
      }
    }
  }

  updateLogin() {
    if (this.isBrowser) {
      if (localStorage.getItem('token')) {
        // Usuario logeado
        this.usuarioEasymaq = JSON.parse(localStorage.getItem('token'));
        this.userKey = this.usuarioEasymaq.id;
      } else {
        this.usuarioEasymaq = null;
        this.userKey = null;
      }
      if (localStorage.getItem('isLoggedIn')) {
        this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
      } else {
        this.isLoggedIn = null;
      }
    }
  }

  logout() {
    if (this.isBrowser) {
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('token');
      localStorage.removeItem('cachedurl');
      localStorage.removeItem('provider');
    }
    this.usuarioEasymaq = null;
    this.userKey = null;
  }
}


