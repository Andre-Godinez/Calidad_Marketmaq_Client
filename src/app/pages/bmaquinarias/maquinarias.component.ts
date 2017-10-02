import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { Meta, Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { URLSearchParams } from '@angular/http'
import { ActivatedRoute } from '@angular/router';

import { seoMaquinariasService } from '../../theme/services/seo/seo-maquinarias.service';
import { UtilsService } from '../../theme/services/utils.service';
import { Category } from '../../theme/services/class/category.class';
import { Company } from '../../theme/services/class/company.class';
import { Brand } from '../../theme/services/class/brand.class';
import { Publication } from '../../theme/services/class/publication.class';
import { CategoryService } from '../../theme/services/api/category.service';
import { CompanyService } from '../../theme/services/api/company.service';
import { BrandService } from '../../theme/services/api/brand.service';
import { PublicationService } from '../../theme/services/api/publication.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, Observable } from 'rxjs/Rx';
import { FavouriteService } from '../../theme/services/api/favourite.service';


@Component({
  selector: 'maquinarias',
  templateUrl: `./maquinarias.component.html`,
  styleUrls: ['./maquinarias.component.scss']
})
export class Maquinarias implements OnInit, OnDestroy {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  fcountry: any = '';
  @ViewChild('search') searchBox: any;
  @ViewChild('search1') searchBox1: any;
  hola: boolean = false;
  eqFondo: boolean = false;
  filempresas: boolean = true;
  filmarcas: boolean = false;
  filcategorias: boolean = false;
  filtipos: boolean = true;
  filcondicion: boolean = true;

  p: number = 1;

  categories: Category[] = [];
  companies: Company[] = [];
  brands: Brand[] = [];
  tipos: string[] = ['venta', 'alquiler'];
  condiciones: string[] = ['nuevo', 'usado'];

  subCategory: Subscription;
  subCompany: Subscription;
  subBrand: Subscription;
  subRoute: Subscription;
  subSearch: Subscription;
  subSearch1: Subscription;

  publications: Publication[] = [];
  menu_filter: boolean = false;
  companyId: string;
  brandId: string;
  categoryId: string;
  type: string;
  condition: string;
  query: string;

  filters: any[] = [];

  params: URLSearchParams;

  constructor(meta: Meta,
    private _seoMaqService: seoMaquinariasService,
    private location: Location,
    private service: PublicationService,
    private categoryService: CategoryService,
    private companyService: CompanyService,
    private brandService: BrandService,
    private utilService: UtilsService,
    private route: ActivatedRoute,
    private _favouriteService: FavouriteService,
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
    title.setTitle(_seoMaqService.title);
    _seoMaqService.metas.forEach(SEO => {
      meta.updateTag(SEO);
    });
    // ******************** Fin SEO component ********************
  }

  ngOnInit() {


    this.fcountry = this.utilService.country;

    let url: string = '';
    this.params = new URLSearchParams(this.location.path(false).split('?')[1]);
    this.companyId = this.params.get('companyId');
    this.brandId = this.params.get('brandId');
    this.categoryId = this.params.get('categoryId');
    this.type = this.params.get('type');
    this.condition = this.params.get('condition');
    this.query = this.params.get('query');
    this.pedir();
    if (this.type) {
      let category = {
        id: this.type,
        name: this.type,
        data: 'type'
      }
      this.filters.push(category);
    }

    if (this.condition) {
      let category = {
        id: this.condition,
        name: this.condition,
        data: 'condition'
      }
      this.filters.push(category);
    }

    if (this.query) {
      let category = {
        id: this.query,
        name: this.query,
        data: 'query'
      }
      this.filters.push(category);
    }

    this.subCategory = this.categoryService.get()
      .subscribe((res: Category[]) => {
        this.categories = res;
        if (this.categoryId) {
          let category = this.categories.filter((obj) => obj.id === this.categoryId);
          let obj = {
            id: category[0].id,
            name: category[0].name,
            data: 'categoryId'
          };
          this.filters.push(obj);
        }
      })

    this.subCompany = this.companyService.get()
      .subscribe((res: Company[]) => {
        this.companies = res;
        if (this.companyId) {
          let category = this.companies.filter((obj) => obj.id === this.companyId);
          let obj = {
            id: category[0].id,
            name: category[0].name,
            data: 'companyId'
          };
          this.filters.push(obj);
        }
      });

    this.subBrand = this.brandService.get()
      .subscribe((res: Brand[]) => {
        this.brands = res;
        if (this.brandId) {
          let category = this.brands.filter((obj) => obj.id === this.brandId);
          let obj = {
            id: category[0].id,
            name: category[0].name,
            data: 'brandId'
          };
          this.filters.push(obj);
        }
      });

    this.subRoute = this.route.queryParamMap
      .subscribe((res: any) => {
        console.log('subRoute');
        if ('venta' === res.params['type'] ||
          res.params['type'] === 'alquiler' ||
          res.params['query']) {
          this.reset();
          this.type = res.params['type'];
          this.query = res.params['query'];
          if (!this.params.get('type')) {
            this.params.append('type', this.type);
          } else {
            this.params.set('type', this.type);
          }
          if (!this.params.get('query')) {
            this.params.append('query', this.query);
          } else {
            this.params.set('query', this.query);
          }
          if (this.type) {
            this.filters.push({
              id: this.type,
              name: this.type,
              data: 'type'
            })
          }
          if (this.query) {
            let index;
            for (let i = 0; i < this.filters.length; i++) {
              if (this.filters[i].data === 'query') {
                index = i;
                break;
              }
            }

            if (typeof (index) === 'undefined') {
              this.filters.push({
                id: this.query,
                name: this.query,
                data: 'query'
              })
            } else {
              this.filters[index] = {
                id: this.query,
                name: this.query,
                data: 'query'
              }
            }

          }
          this.pedir();
        }
      });

    if (this.isBrowser) {
      this.subSearch = Observable.fromEvent(this.searchBox.nativeElement, 'keyup')
        .filter((e: any) => e.keyCode === 13)
        .subscribe((res: any) => {
          let query = res.target.value.trim().replace(/ +/g, ' ').toLowerCase();
          if (query !== ' ' && query !== '') {
            this.filter('query', query);
            console.log('query : ', query);
            console.log('filters : ', this.filters);
            this.searchBox.nativeElement.value = '';
            this.searchBox1.nativeElement.value = '';
          } else {
            this.searchBox.nativeElement.value = '';
            this.searchBox1.nativeElement.value = '';
          }
        });

      this.subSearch1 = Observable.fromEvent(this.searchBox1.nativeElement, 'keyup')
        .filter((e: any) => e.keyCode === 13)
        .subscribe((res: any) => {
          let query = res.target.value.trim().replace(/ +/g, ' ').toLowerCase();
          if (query !== ' ' && query !== '') {
            this.filter('query', query);
            console.log('query : ', query);
            console.log('filters : ', this.filters);
            this.searchBox.nativeElement.value = '';
            this.searchBox1.nativeElement.value = '';
          } else {
            this.searchBox.nativeElement.value = '';
            this.searchBox1.nativeElement.value = '';
          }
        });
    }

  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.subCategory.unsubscribe();
      this.subCompany.unsubscribe();
      this.subBrand.unsubscribe();
      this.subRoute.unsubscribe();
      this.subSearch.unsubscribe();
      this.subSearch1.unsubscribe();
    }
  }

  reset(): void {
    this.companyId = null;
    this.brandId = null;
    this.categoryId = null;
    this.condition = null;
    this.query = null;
    this.filters = [];
    this.type = null;
    this.params.delete('companyId');
    this.params.delete('brandId');
    this.params.delete('categoryId');
    this.params.delete('type');
    this.params.delete('condition');
    this.params.delete('query');
  }

  pedir(): void {
    let subPublication: Subscription
    if (this.params.toString()) {
      console.log(this.params.toString());
      subPublication = this.service.get(`?${this.params.toString()}&countryId=${this.fcountry.id}`)
        .subscribe((res: Publication[]) => {
          console.log('publications:', res);
          res = res.filter((obj) => {
            if (!obj.urlImages) {
              return false;
            } else {
              if (obj.urlImages.length > 0) {
                return true;
              } else {
                return false;
              }
            }
          });
          this.publications = res;
          subPublication.unsubscribe();
        })
    } else {
      subPublication = this.service.get(`?countryId=${this.fcountry.id}&${this.params.toString()}`)
        .subscribe((res: Publication[]) => {
          console.log('publications:', res);
          res = res.filter((obj) => {
            if (!obj.urlImages) {
              return false;
            } else {
              if (obj.urlImages.length > 0) {
                return true;
              } else {
                return false;
              }
            }
          });
          this.publications = res;
          subPublication.unsubscribe();
        })
    }
  }

  filter(name: string, data: any): void {
    switch (name) {
      case 'company':
        this.companyId = data.id;
        this.filters.push({
          id: data.id,
          name: data.name,
          data: 'companyId'
        })
        if (!this.params.get('companyId')) {
          this.params.append('companyId', this.companyId);
        } else {
          this.params.set('companyId', this.companyId);
        }
        break;
      case 'brand':
        this.brandId = data.id;
        this.filters.push({
          id: data.id,
          name: data.name,
          data: 'brandId'
        })
        if (!this.params.get('brandId')) {
          this.params.append('brandId', this.brandId);
        } else {
          this.params.set('brandId', this.brandId);
        }
        break;
      case 'category':
        this.categoryId = data.id;
        this.filters.push({
          id: data.id,
          name: data.name,
          data: 'categoryId'
        })
        if (!this.params.get('categoryId')) {
          this.params.append('categoryId', this.categoryId);
        } else {
          this.params.set('categoryId', this.categoryId);
        }
        break;
      case 'tipo':
        this.type = data;
        this.filters.push({
          id: data,
          name: data,
          data: 'type'
        })
        if (!this.params.get('type')) {
          this.params.append('type', this.type);
        } else {
          this.params.set('type', this.type);
        }
        break;
      case 'condicion':
        this.condition = data;
        this.filters.push({
          id: data,
          name: data,
          data: 'condition'
        })
        if (!this.params.get('condition')) {
          this.params.append('condition', this.condition);
        } else {
          this.params.set('condition', this.condition);
        }
        break;
      case 'query':
        this.query = data;
        let index;
        for (let i = 0; i < this.filters.length; i++) {
          if (this.filters[i].data === 'query') {
            index = i;
            break;
          }
        }
        if (typeof (index) === 'undefined') {
          this.filters.push({
            id: data,
            name: data,
            data: 'query'
          })
        } else {
          this.filters[index] = {
            id: data,
            name: data,
            data: 'query'
          }
        }

        if (!this.params.get('query')) {
          this.params.append('query', this.query);
        } else {
          this.params.set('query', this.query);
        }
        break;
    }
    this.location.replaceState(`${this.fcountry.name}/maquinarias`, `?${this.params.toString()}`);
    this.pedir();
  }

  delete(id: any, index: number) {
    switch (id.data) {
      case 'companyId':
        this.companyId = null;
        break;
      case 'brandId':
        this.brandId = null;
        break;
      case 'categoryId':
        this.categoryId = null;
        break;
      case 'type':
        this.type = null;
        break;
      case 'condition':
        this.condition = null;
        break;
    }
    this.filters.splice(index, 1);
    this.params.delete(id.data);
    if (this.filters.length === 0) {
      console.log('0 :', this.fcountry);
      this.location.replaceState(`${this.fcountry.name}/maquinarias`, this.params.toString());
    } else {
      console.log('no 0 :', this.fcountry);
      this.location.replaceState(`${this.fcountry.name}/maquinarias`, `?${this.params.toString()}`);
    }
    this.pedir();
  }

  topPage(event: number) {
    this.p = event;
  }

  FilEmpresas() {
    this.filempresas = !this.filempresas;
  }
  FilMarcas() {
    this.filmarcas = !this.filmarcas;
  }
  FilCatergorias() {
    this.filcategorias = !this.filcategorias;
  }
  FilTipos() {
    this.filtipos = !this.filtipos;
  }
  FilCondiciones() {
    this.filcondicion = !this.filcondicion;
  }

  resFilter() {
    this.menu_filter = !this.menu_filter;
  }

  addFavorito(idpubli) {
    if (this.isBrowser) {
      let obj = {
        usuarioId: JSON.parse(localStorage.getItem('token')).id,
        publicationId: idpubli
      }
      let fav = this._favouriteService.AddFavourite(obj)
        .subscribe(res => {
          console.log('respuesta', res);
        })
    }

  }

}
