import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../../theme/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';
// import { PublicarService } from '../../theme/services/publicar.service';
import { Meta , Title } from '@angular/platform-browser';
import { CategoryService } from '../../theme/services/api/category.service';
import { BookService } from '../../theme/services/api/book.service';



@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {


  tipodocumento:any[]=['DNI','RUC'];
  tipo_serv: any[] = ['alquiler', 'venta'];
  selectTipo:any='DNI';
  nombre:any;
  apellido:any;
  email:any;
  telefono:any;
  celular:any;
  selectServ:any;
  selectCategoria:any;
  monto:any;
  descripcion:any;
  tipmoneda:any;
  detallereclamo: any;
  detalle: any;
  pedido: any;



  dni: any;
  ruc: any;



  reclamoshechos:Array<any> = [];


  listaCategoria:any[]=[];
  listaSubCategoria:any[]=[];
  list:any[];
  // position de menu
  position:number = 1;




  misdatosdataconfig: any = {
        'activemodal': false,
        'titulo': 'Mensaje de Easymaq',
        'descripcion': 'Debe ingresar el correo y la contraseña para poder ingresar'
  };

  constructor(private _categoryService:CategoryService, private _bookService:BookService, private router:Router) {


   }

  ngOnInit() {
    this.getCategory();

  }
  datos(){
    console.log(this.selectTipo);
  }
  getCategory(){
    let cat = this._categoryService.get()
                  .subscribe(res=>{
                    this.listaCategoria=res;
                    cat.unsubscribe();
                  })
  }
  confirm(text:string){
    this.misdatosdataconfig.activemodal=true;
    this.misdatosdataconfig.descripcion=text;
  }

  showBtnmodal(event){
    this.misdatosdataconfig.activemodal = event.nameBtnmodal;
    this.router.navigate(['/pe/home']);
  }

  submit(){
    let objrecl = {
      servicio : this.selectServ,
      categoria:  this.selectCategoria,
      monto: this.monto,
      tipo: this.tipmoneda,
      descripcion: this.descripcion,
      detalleReclamo: this.detallereclamo,
      detalle: this.detalle,
      pedido: this.pedido,
      usuarioId: JSON.parse(localStorage.getItem('token')).id
    }
   console.log(objrecl);
    let reclamo = this._bookService.PostReclamo(objrecl)
                .subscribe(res=>{
                  console.log(res);
                  // alert('Reclamo realizado');
                  this.confirm('Reclamo realizado');
                  reclamo.unsubscribe();
                })


  }

}
