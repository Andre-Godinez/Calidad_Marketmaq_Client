import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Router} from '@angular/router';
import { LoginService } from '../../theme/services/login.service';
import { NgForm ,FormGroup , FormControl , Validators} from '@angular/forms';
import { UtilsService } from '../../theme/services/utils.service';
import { UserService } from '../../theme/services/api/usuario.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-corporativo',
  templateUrl: './corporativo.component.html',
  styleUrls: ['./corporativo.component.scss']
})
export class CorporativoComponent implements OnInit {
  nombrelimp:string;
  emaillimp:string;
  inf:boolean=true;
   misdatosdataconfig: any = {
        'activemodal': false,
        'titulo': 'Mensaje de Easymaq',
        'descripcion': 'En unos momentos le estaremos informando a su correo'

  };
  constructor(private _utilsService:UtilsService, private service: UserService, private router:Router) {
  }

  ngOnInit() {
  }
  confirm(des:string){
    this.misdatosdataconfig.activemodal=true;
    this.misdatosdataconfig.descripcion=des;
  }

  showBtnmodal(event){
    this.misdatosdataconfig.activemodal = event.nameBtnmodal;
    this.router.navigate(['/pe/home']);
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
        this.confirm('Solicitud enviada correctamente, pronto nos comunicaremos con usted.')
        subForm.unsubscribe();
      });
    }
  }
}
