import {
  Component,
  Input,
  OnInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { Publication } from '../../theme/services/class/publication.class';
import { FavouriteService } from '../../theme/services/api/favourite.service';
import { UtilsService } from '../../theme/services/utils.service';
import { UbigeoStatic } from "../../theme/datastatic/ubigeo.class";

@Component({
  selector: 'card-maquina-component',
  template: `
    <div class="eq-slide-card card-maq-new" *ngIf="maquina">
      <div class="eq-maquina-image">
        <div class="totally-item">
          <ngb-carousel>
            <div *ngFor="let imagen of maquina.urlImages">
              <ng-template ngbSlide>
                <a [routerLink]="['/'+fcountry.name+'/maquinarias/'+maquina.id]">
                  <img [src]="imagen" alt="Maquinaria pesada: {{ maquina.category.name }} - marca: {{ maquina.brand.name }} - modelo: {{ maquina.modelo }}">
                </a>
              </ng-template>
            </div>
          </ngb-carousel>

        </div>
        <div class="count-img">
          <span>{{ maquina.urlImages.length}}</span>
          <i class="material-icons">camera_alt</i>
        </div>
      </div>
      <div [ngClass]="{'active-favorite-maq': favorite}" (click)="addFavorito(maquina.id)" class="container-star-maq">
        <div class="maquina-star border-favorite opera-star">
          <i class="material-icons">favorite_border</i>
        </div>
        <div class="maquina-star complete-favorite opera-star">
          <i class="material-icons rojo">favorite</i>
        </div>
      </div>
      <div class="eq-maquina-title">
        <div class="sub-cat-model">{{ maquina.category.name }}</div>
        <h2 class="maquina-name">{{ maquina.brand.name }}
          <div class="maquina-marca">{{ maquina.modelo }}</div>
        </h2>
      </div>
      <div class="eq-maquina-info">
        <div class="maquina-ubicacion">
          <div class="maquina-direccion">
                {{ convertUbigeo.getDepartamento(maquina.uDepartamento)}} -
                {{ convertUbigeo.getProvincia(maquina.uDepartamento, maquina.uProvincia) }} -
                {{ convertUbigeo.getDistrito(maquina.uDepartamento, maquina.uProvincia, maquina.uDistrito) }}
          </div>
        </div>
        <div class="price-points">
          <div class="price-maqs">
            <a *ngIf="!maquina.prConsultar" class="detalle-precio" [routerLink]="['/'+fcountry.name+'/maquinarias/'+maquina.id]">{{ (maquina.prMoneda === 'dolares' ? '$' : 'S/') }} {{ maquina.prPrecio | number:'1.2-2' }}</a>
            <a *ngIf="maquina.prConsultar" class="detalle-precio" [routerLink]="['/'+fcountry.name+'/maquinarias/'+maquina.id]"> {{ 'CONSULTAR' }}</a>
          </div>
          <div class="content-rating-stars" *ngIf="maquina.rkStarTotal && maquina.rkStarTotal >= 0">
            <div class="ratingControl">
              <div [ngClass]="{'active': maquina.rkStarTotal*10 >= 50}" class="ratingControl-stars ratingControl-stars--5"></div>
              <div [ngClass]="{'active': maquina.rkStarTotal*10 >= 45}" class="ratingControl-stars ratingControl-stars--45 ratingControl-stars--half"></div>
              <div [ngClass]="{'active': maquina.rkStarTotal*10 >= 40}" class="ratingControl-stars ratingControl-stars--4"></div>
              <div [ngClass]="{'active': maquina.rkStarTotal*10 >= 35}" class="ratingControl-stars ratingControl-stars--35 ratingControl-stars--half"></div>
              <div [ngClass]="{'active': maquina.rkStarTotal*10 >= 30}" class="ratingControl-stars ratingControl-stars--3"></div>
              <div [ngClass]="{'active': maquina.rkStarTotal*10 >= 25}" class="ratingControl-stars ratingControl-stars--25 ratingControl-stars--half"></div>
              <div [ngClass]="{'active': maquina.rkStarTotal*10 >= 20}" class="ratingControl-stars ratingControl-stars--2"></div>
              <div [ngClass]="{'active': maquina.rkStarTotal*10 >= 15}" class="ratingControl-stars ratingControl-stars--15 ratingControl-stars--half"></div>
              <div [ngClass]="{'active': maquina.rkStarTotal*10 >= 10}" class="ratingControl-stars ratingControl-stars--1"></div>
              <div [ngClass]="{'active':maquina.rkStarTotal*10 >= 5}" class="ratingControl-stars ratingControl-stars--05 ratingControl-stars--half"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-easymodal [dataconfig]="misdatosdataconfig"></app-easymodal>
  `,
  styleUrls: ['../../pages/bmaquinarias/maquinarias.component.scss'],
  host: {
    class: 'contentcar'
  }
})
export class CardMaquinaComponent implements OnInit {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  fcountry: any = '';
  @Input() maquina: Publication;

  favorite: boolean = false;
  idFavorite: string = '';

  constructor(
    private _favouriteService: FavouriteService,
    private utilService: UtilsService,
    @Inject(PLATFORM_ID) private platform_id
  ) { }
  convertUbigeo = new UbigeoStatic;
  misdatosdataconfig: any = {
        'activemodal': false,
        'titulo': 'Mensaje de Easymaq',
        'descripcion': 'Debe ingresar el correo y la contraseña para poder ingresar'
  };
  ngOnInit() {
    if (this.isBrowser) {
      this.fcountry = this.utilService.country;
      let user = JSON.parse(localStorage.getItem('token'));
      if (user) {
        let favorites = user.favorites;
        for (let i = 0; i < favorites.length; i++) {
          if (favorites[i].publicationId === this.maquina.id) {
            this.idFavorite = favorites[i].id;
            this.favorite = true;
            break;
          }
        }
      }
    }
  }
  confirm(text:string){
    this.misdatosdataconfig.activemodal=true;
    this.misdatosdataconfig.descripcion=text;
  }
  addFavorito(idpubli) {
    if (this.isBrowser) {
      let user = JSON.parse(localStorage.getItem('token'));
      if (user) {
        let obj = {
          usuarioId: JSON.parse(localStorage.getItem('token')).id,
          publicationId: idpubli
        }
        if (this.favorite) {
          let delFavSub = this._favouriteService.delete(this.idFavorite)
            .subscribe((res: any) => {
              console.log('delete favorite: ', res);
              let user = JSON.parse(localStorage.getItem('token'));
              let index;
              for (let i = 0; i < user.favorites.length; i++) {
                if (user.favorites[i].id === this.idFavorite) {
                  index = i;
                  break;
                }
              }
              user.favorites.splice(index, 1);
              localStorage.setItem('token', JSON.stringify(user));
              this.favorite = false;
              delFavSub.unsubscribe();
            }, (err: any) => {
              console.log(err);
              delFavSub.unsubscribe();
            });
        } else {
          let fav = this._favouriteService.AddFavourite(obj)
            .subscribe(res => {
              let user = JSON.parse(localStorage.getItem('token'));
              user.favorites.push(res);
              this.idFavorite = res.id;
              localStorage.setItem('token', JSON.stringify(user));
              this.favorite = true;
              fav.unsubscribe();
            }, (err: any) => {
              console.log(err);
              fav.unsubscribe();
            });
        }
      } else {
        this.confirm('Debes iniciar sesion para guardar esta maquinaria en tus favoritos');
        console.log('sin logearse');
      }
    }
  }
}
