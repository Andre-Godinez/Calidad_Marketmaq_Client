import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { Publication } from '../../../theme/services/class/publication.class';
import { PublicationService } from '../../../theme/services/api/publication.service';
import { RankingService } from '../../../theme/services/api/ranking.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'detalle-maquinaria-component',
  templateUrl: './detalle-maquinaria.component.html',
  styleUrls: ['./detalle-maquinaria.component.scss']
})
export class DetalleMaquinariaComponent implements OnInit, OnDestroy {
  isBrowser: boolean = isPlatformBrowser(this.platform_id);
  imagenSeleccionada: string = '';
  publication: Publication;
  btnMapaAtras: boolean = false;
  subRouter: Subscription;
  subService: Subscription;

  btRanking: boolean = false;

  titlerank: any;
  starsrank: any;
  descriprank: any;
  misdatosdataconfig: any = {
    'activemodal': false,
    'titulo': 'Mensaje de Easymaq',
    'descripcion': 'Debe ingresar el correo y la contraseña para poder ingresar'
  };
  constructor(
    @Inject(PLATFORM_ID) private platform_id,
    private router: Router,
    private route: ActivatedRoute,
    private service: PublicationService,
    private meta: Meta,
    private title: Title,
    private _rankingService: RankingService
  ) { }

  ngOnInit(): void {
    console.log('aqui');
    this.subRouter = this.route.params
      .subscribe((param: any) => {
        console.log('aqui1');
        this.init();
        let id = param.id;
        this.subService = this.service.getById(id)
          .subscribe((res: Publication) => {
            console.log('aqui2');
            this.publication = res;
            let title = '' + this.publication.brand.name + ' ' + this.publication.modelo + ' | Easymaq SAC';
            this.imagenSeleccionada = this.publication.urlImages[0];
            this.title.setTitle(title);
            this.meta.updateTag({ name: 'description', content: this.publication.description ? this.publication.description : 'Sin descripción' });
            // this.meta.updateTag({ property: 'fb:pages', content: '1441702622591333' });
            this.meta.updateTag({ property: 'og:type', content: 'website' });
            this.meta.updateTag({ property: 'og:title', content: title });
            /* this.meta.updateTag({ property: 'og:url', content: 'http://www.tienda.niux.pe/' + this.product.id }); */
            this.meta.updateTag({ property: 'og:image', content: this.publication.urlImages[0] ? this.publication.urlImages[0] : 'https://www.niux.pe/assets/img/image1.jpg' });
            this.meta.updateTag({ property: 'og:description', content: this.publication.description ? this.publication.description : 'Sin descripción' });
            this.meta.updateTag({ property: 'og:site_name', content: 'Easymaq' });
            console.log(res);

            /* ADDED VISTAS */
            if (this.isBrowser) {
              this.DevolverRanking();
              let subVista: Subscription = this.service.addVista(this.publication.id)
                .subscribe((res: any) => {
                  console.log('vista added');
                  subVista.unsubscribe();
                }, (err: any) => {
                  console.log('err vista add', err);
                  subVista.unsubscribe();
                })
            }
          });
      });
  }

  ngOnDestroy(): void {
    this.subRouter.unsubscribe();
    this.subService.unsubscribe();
  }

  confirm(text: string) {
    this.misdatosdataconfig.activemodal = true;
    this.misdatosdataconfig.descripcion = text;
  }

  init(): void {
    this.publication = null;
  }

  openRanking() {
    if (this.isBrowser) {
      if (localStorage.getItem('token')) {
        this.btRanking = !this.btRanking;
      } else {
        this.confirm('Inicie sesion para poder asignar una calificacion')
      }
    }
  }

  showBtranking(event) {
    this.btRanking = event.nameBtnranking;
  }

  recibir(event: any) {
    console.log('ranktotal: ', event);
    this.publication.rkStarTotal = event;
  }

  DevolverRanking() {
    if (this.isBrowser) {
      if (localStorage.getItem('token')) {
        let obj = {
          usuarioId: JSON.parse(localStorage.getItem('token')).id,
          publicationId: this.publication.id
        }
        let dev = this._rankingService.GetNumStars(obj)
          .subscribe(res => {
            this.titlerank = res.title;
            this.starsrank = res.rankStar;
            this.descriprank = res.description;
            console.log(this.titlerank)
          })
      }
    }
  }
}
