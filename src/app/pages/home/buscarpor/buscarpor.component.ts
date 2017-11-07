import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

import { Company } from '../../../theme/services/class/company.class';
import { Brand } from '../../../theme/services/class/brand.class';
import { Category } from '../../../theme/services/class/category.class';

import { UtilsService } from '../../../theme/services/utils.service';
import { CompanyService } from '../../../theme/services/api/company.service';
import { BrandService } from '../../../theme/services/api/brand.service';
import { CategoryService } from '../../../theme/services/api/category.service';
import { CategoriasStatic } from '../../../theme/datastatic/categorias.class';
import { Subscription, Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-buscarpor',
  templateUrl: './buscarpor.component.html',
  styleUrls: ['./buscarpor.component.scss']
})
export class BuscarporComponent implements OnInit, OnDestroy {

  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  fcountry: string = '';

  companies: Company[] = [];
  listaMarcas: Brand[] = [];
  listaCategorias: Category[] = [];

  subCompany: Subscription;
  subBrand: Subscription;
  subCategory: Subscription;

  btnver: string;
  btnbusca: string;

  empresasStaticas: any[] = [];


  constructor(
    private _brandService: BrandService,
    private companyService: CompanyService,
    private categoryService: CategoryService,
    private utilService: UtilsService,
    @Inject(PLATFORM_ID) private platform_id
  ) {
    this.btnver = '';
    this.btnbusca = 'marca';
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.fcountry = this.utilService.country;

      this.subBrand = this._brandService.get()
        .subscribe(res => {
          this.listaMarcas = res;
          console.log(this.listaMarcas)
        })

      this.subCategory = this.categoryService.get()
        .subscribe((res: Category[]) => {
          this.listaCategorias = res;
          console.log(this.listaCategorias);
        })

      this.subCompany = this.companyService.get()
        .subscribe((res: Company[]) => {
          console.log('res:', res);
          this.empresasStaticas = res;
        })

    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.subCategory.unsubscribe();
      this.subCompany.unsubscribe();
      this.subBrand.unsubscribe();
      // this.subRoute.unsubscribe();
      // this.subSearch.unsubscribe();
    }
  }
}
