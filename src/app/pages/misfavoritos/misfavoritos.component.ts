import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { CategoriasStatic } from '../../theme/datastatic/categorias.class';
import { AnosStatic } from '../../theme/datastatic/anos.class';
// import { BuscadorService } from '../../theme/services/buscador.service';
// import { PublicarService } from '../../theme/services/publicar.service';
import { UbigeoStatic } from "../../theme/datastatic/ubigeo.class";
import { RankingInitialize } from '../../theme/interfaces/ranking.class';
import { LoginService } from '../../theme/services/login.service';
import { Favorito } from '../../theme/interfaces/favorito.interface';
import { FavouriteService } from '../../theme/services/api/favourite.service';
// import { FavoritosService } from '../../theme/services/favoritos.service';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { UtilsService } from '../../theme/services/utils.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-misfavoritos',
  templateUrl: './misfavoritos.component.html',
  styleUrls: ['./misfavoritos.component.scss']
})
export class MisfavoritosComponent implements OnInit {
  fcountry: any = '';
  publicationsF: any[] = [];
  userId: any = JSON.parse(localStorage.getItem('token')).id;
  convertUbigeo = new UbigeoStatic;
  constructor(private _favouriteService: FavouriteService, private utilService: UtilsService, ) {

  }

  ngOnInit() {
    this.getFavoritos();
    this.fcountry = this.utilService.country;
  }
  getFavoritos() {
    let fav = this._favouriteService.GetFavouritesByUserId(this.userId)
      .subscribe(res => {
        console.log(res);
        this.publicationsF = res;
        console.log(this.publicationsF);
        fav.unsubscribe();
      })
  }
  deleteFav(idfav, index) {
    let deletfav = this._favouriteService.delete(idfav)
      .subscribe(res => {
        this.publicationsF.splice(index, 1);
        console.log(res);
        deletfav.unsubscribe();
      });
    console.log(idfav);
  }
}
