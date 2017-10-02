import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { UtilsService } from '../../theme/services/utils.service';

import { TerminosSeo } from './Terminos.class';

@Component({
  selector: 'app-terminoscondiciones',
  templateUrl: './terminoscondiciones.component.html',
  styleUrls: ['./terminoscondiciones.component.scss']
})
export class TerminoscondicionesComponent {

// Genericas
  country: string = '';
  titleSeo: any = (new TerminosSeo).title;
  metaSeo: any = (new TerminosSeo).metas;

  constructor(meta: Meta,
    title: Title,
    private _utilsService: UtilsService) {

    // ******************** Inicio SEO component ********************
    title.setTitle(this.titleSeo);
    this.metaSeo.forEach(SEO => {
      meta.updateTag(SEO);
    });
    // ******************** Fin SEO component ********************
  }



}
