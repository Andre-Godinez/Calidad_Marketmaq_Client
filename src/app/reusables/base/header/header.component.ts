import {
  Component,
  HostListener,
  Inject,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { UtilsService } from '../../../theme/services/utils.service';
import { LoginService } from '../../../theme/services/login.service';
import { Router } from '@angular/router';

// Uso del scroll en angular 2.
// http://brianflove.com/2016/10/10/angular-2-window-scroll-event-using-hostlistener/

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }

  fcountry: any;

  navIsFixed: boolean = false;
  @Input('clasepage') clasepage: string;

  // Aqui es si el usuario esta logueado
  usuario: any = {};

  // Aqui controladores del frontend
  btMenu: boolean = false;
  btBuscar: boolean = false;
  // btLogin:boolean=false;
  @Input('btLogin') btLogin;
  @Output() pasaBtnheader = new EventEmitter();
  btOptions: boolean = false;
  eqFondo: boolean = false;

  // Texto ingresado en el buscador General
  valueGeneral: string = '';
  alq: boolean = false;
  ven: boolean = false;
  ope: boolean = false;

  valueOperacion: string = 'venta';
  cli: string = 'venta';

  private document: Document;
  constructor(
    @Inject(DOCUMENT) document: any,
    public _loginService: LoginService,
    private _utilsService: UtilsService,
    private router: Router
  ) {
    this.document = document as Document;
  }

  ngOnInit() {

    this.fcountry = this._utilsService.asignateCountry();

    this.usuario = this._loginService.usuarioEasymaq;
    if (!this.btLogin) {
      this.btLogin = false;
    }
  }

  showBtnlogin(event) {
    this.btLogin = event.nameBtnlogin;
    this.pasaBtnheader.emit({ nameBtnlogin: this.btLogin });
  }

  logout() {
    this._loginService.logout();
  }

}
