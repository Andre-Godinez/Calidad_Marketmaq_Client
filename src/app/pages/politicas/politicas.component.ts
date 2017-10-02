import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { UtilsService } from '../../theme/services/utils.service';

import { PoliticasSeo } from './politicas.class';

@Component({
    selector: 'app-politicas',
    templateUrl: './politicas.component.html',
    styleUrls: ['./politicas.component.scss']
})
export class PoliticasComponent {

// Genericas
    country: string = '';
    titleSeo: any = (new PoliticasSeo).title;
    metaSeo: any = (new PoliticasSeo).metas;

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
