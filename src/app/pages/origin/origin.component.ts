import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Workcountry } from '../../theme/datastatic/workcountry.class';
import { seoOriginService } from '../../theme/services/seo/seo-origin.service';

@Component({
    selector: 'app-origin',
    templateUrl: './origin.component.html',
    styleUrls: ['./origin.component.scss']
})
export class OriginComponent {

    listCountry: any[] = (new Workcountry).listCountry;

    // Genericas
    country: string = '';

    constructor(meta: Meta,
        title: Title,
        private _seoOriginService: seoOriginService) {

        // ******************** Inicio SEO component ********************
        title.setTitle(_seoOriginService.title);
        _seoOriginService.metas.forEach(SEO => {
            meta.updateTag(SEO);
        });
        // ******************** Fin SEO component ********************
    }


}


