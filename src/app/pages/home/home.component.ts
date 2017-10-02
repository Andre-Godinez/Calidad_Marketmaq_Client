import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { UtilsService } from '../../theme/services/utils.service';
import { Router } from '@angular/router';
import { PublicationService } from '../../theme/services/api/publication.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { seoHomeService } from '../../theme/services/seo/seo-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isBrowser: boolean = isPlatformBrowser(this.platform_id);
  clasepage: string = "home";
  vector: any[] = [];
  Slidertestimonios: any;
  Testevent: any;
  informate: boolean = false;
  bot: boolean = false;
  bot2: boolean = false;
  // Genericas
  country: string = '';
  ultimasPubli: any[] = [];

  fcountry: any;

  constructor(meta: Meta,
    private _publicationService: PublicationService,
    private _utilsService: UtilsService,
    private _seoHomeService: seoHomeService,
    private router: Router,
    title: Title,
    config: NgbCarouselConfig,
    @Inject(PLATFORM_ID) private platform_id
  ) {
    // ******************** Inicio configuracion de sliders ********************
    config.interval = 0;
    config.wrap = true;
    config.keyboard = true;
    // ******************** Inicio configuracion de sliders ********************

    // ******************** Inicio SEO component ********************
    title.setTitle(_seoHomeService.title);
    _seoHomeService.metas.forEach(SEO => {
      meta.updateTag(SEO);
    });
    // ******************** Fin SEO component ********************

  }

  ngOnInit() {
    this.bot = true;
    this.bot2 = false;
    this.fcountry = this._utilsService.asignateCountry();
    this.actualizarslider('alquiler');
  }
  bmarcas(marcaId) {
    this.router.navigate([`/${this.fcountry.name}/maquinarias?brandId=${marcaId}`]);
  }

  actualizarslider(type) {
    let countryId = this.fcountry.id;
    let query = `?order=DESC&type=${type}&limit=12&countryId=${countryId}`;
    let ultp = this._publicationService.get(query).
      subscribe(res => {
        this.ultimasPubli = res;
        console.log('Ultimas', this.ultimasPubli);
      }, (err: any) => {
        console.log('err : ', err);
      }, () => {
        ultp.unsubscribe();
      });

  }
}
