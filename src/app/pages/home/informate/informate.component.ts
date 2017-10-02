import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../../../theme/services/login.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../../theme/services/api/usuario.service';
import { Subscription } from 'rxjs/Rx';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-informate',
  templateUrl: './informate.component.html',
  styleUrls: ['./informate.component.scss']
})
export class InformateComponent implements OnInit {

  formAngular: FormGroup;

  inf: boolean = true;
  constructor(
    private service: UserService) {
  }

  ngOnInit() {
    this.formAngular = new FormGroup({
      'emaila': new FormControl('', [Validators.required, Validators.pattern("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")])
    });
  }

  enviarMailCoorp(nombre, email) {
    if (email == '' || nombre == '') {
      return
    } else {
      let subForm: Subscription = this.service.getInfo({
        nombre: nombre,
        email: email
      }).subscribe((res: any) => {
        console.log('res: ', res);
        subForm.unsubscribe();
      });
    }
    // Envia email de confirmacion al usuario que publico
    /* this._utilsService.enviocorreo(nombre, email)
      .subscribe(success => {
        console.log(success);
      }); */
  }
}
