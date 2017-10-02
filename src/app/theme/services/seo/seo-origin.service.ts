import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Workcountry } from '../../datastatic/workcountry.class';

@Injectable()
export class seoOriginService {
    country: any = {
        code: 'pe',
        name: 'Perú'
    };
    listCountry: any[] = (new Workcountry).listCountry;

    title: string = '';
    metas: any[] = [];

    constructor(private router: Router) {
        this.country = this.serverCountry();
        this.getMetas();
    }

    serverCountry(): any {
        let result: any = {
            code: this.router.url.split('/')[1],
            name: ''
        };
        this.listCountry.forEach(pais => {
            if (pais.code == result.code) {
                result.name = pais.name;
            }
        });
        return result;
    }

    getMetas() {
        this.title = `Paises donde encontrar tus maquinarias pesadas | Easymaq`;
        this.metas = [
            {
                name: 'description',
                content: `Aqui podras elegir el pais donde deseas vender, comprar o alquilar tus maquinarias pesadas.`
            },
            {
                property: 'fb:pages', content: '1441702622591333'
            },
            {
                property: 'og:type', content: 'website'
            },
            {
                property: 'og:title', content: `Paises donde encontrar tus maquinarias pesadas | Easymaq`
            },
            {
                property: 'og:url', content: `http://easymaq.com`
            },
            {
                property: 'og:image', content: 'https://lh3.googleusercontent.com/-6OhxaFoBDOs/WUgrqUjThNI/AAAAAAAAA1w/g7UgmhIQrloDiEmuPQPvoQyywQp5HWKYwCL0BGAYYCw/h630/2017-06-19.png'
            },
            {
                property: 'og:description', content: `Aqui podras elegir el pais donde deseas vender, comprar o alquilar tus maquinarias pesadas.`
            },
            {
                property: 'og:site_name', content: 'Easymaq'
            },
            {
                name: 'twitter:card', content: 'summary'
            },
            {
                name: 'twitter:site', content: '@easy_maq'
            },
            {
                name: 'twitter:title', content: `Paises donde encontrar tus maquinarias pesadas | Easymaq`
            },
            {
                name: 'twitter:image', content: 'https://lh3.googleusercontent.com/-6OhxaFoBDOs/WUgrqUjThNI/AAAAAAAAA1w/g7UgmhIQrloDiEmuPQPvoQyywQp5HWKYwCL0BGAYYCw/h630/2017-06-19.png'
            },
            {
                name: 'twitter:description', content: `Aqui podras elegir el pais donde deseas vender, comprar o alquilar tus maquinarias pesadas.`
            }
        ];
    }

}

