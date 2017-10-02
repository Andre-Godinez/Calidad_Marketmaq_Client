import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../../../theme/services/utils.service';
import { Router } from '@angular/router';
// import { LoginService } from '../../theme/services/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  misdatosdataconfigfot: any = {
    'activemodal': false,
    'titulo': 'Mensaje de Easymaq',
    'descripcion': 'Debe ingresar el correo y la contraseña para poder ingresar'
  };

  // constructor(private _router: Router, private _log: LoginService) { }
  constructor(public _utilsService: UtilsService, private _router: Router) {
  }
  ngOnInit() {
  }

  confirm(text: string) {
    this.misdatosdataconfigfot.activemodal = true;
    this.misdatosdataconfigfot.descripcion = text;
  }

  ir() {
    // if (this._log.usuario) {
    this._router.navigate(['/libro']);
    // } else {
    // this.misdatosdataconfigfot.activemodal = true;
    // this.misdatosdataconfigfot.descripcion = 'Debe iniciar sesion para realizar un reclamo';
    // }
  }

  VerfiLogin() {
    if (localStorage.getItem('token')) {
      this._router.navigate(['/pe/libro']);
    } else {
      // alert('Logeate primero');
      this.confirm('Debe iniciar sesion para realizar un reclamo');
    }
  }

}
