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

  empresasStaticas: any[] = [
    /* {
      'enable': true,
      'imagen': 'https://firebasestorage.googleapis.com/v0/b/easymaq-cloud.appspot.com/o/img%2Flogo_komatsu.png?alt=media&token=13cfc0c8-6ce6-4634-8d96-ba194bcdb968',
      'name': 'komatsu',
      'id': '598e35f5ae3cc012830cbb56'
    },
    {
      'enable': true,
      'imagen': 'https://firebasestorage.googleapis.com/v0/b/easymaq-cloud.appspot.com/o/img%2F1492634874355-logo-cemaq-trasparente1.png?alt=media&token=750586a6-6663-429e-b4cd-01ff8cd104ef',
      'name': 'cemaq',
      'id': '598e3135093bae22f0adca65'
    },
    {
      'enable': true,
      'imagen': 'https://firebasestorage.googleapis.com/v0/b/easymaq-cloud.appspot.com/o/img%2Flogo_maquiperu.png?alt=media&token=773a4a79-95f8-494a-b715-e8e785497617',
      'name': 'maquiperu',
      'id': '59947bc30c0a7447e8cba959'
    },
    {
      'enable': true,
      'imagen': 'https://firebasestorage.googleapis.com/v0/b/easymaq-cloud.appspot.com/o/img%2Flogo-mepco.png?alt=media&token=0afe52bd-01db-41c8-ae18-286f61c0be33',
      'name': 'mepco',
      'id': '59948a520c0a7447e8cba95a'
    },
    {
      'enable': true,
      'imagen': 'https://firebasestorage.googleapis.com/v0/b/easymaq-cloud.appspot.com/o/img%2Flogo_tremachgroup.png?alt=media&token=90c5027b-32a4-4ab5-b594-c108b90d83aa',
      'name': 'tremach',
      'id': '59948a620c0a7447e8cba95b'
    },
    {
      'enable': true,
      'imagen': 'https://firebasestorage.googleapis.com/v0/b/easymaq-cloud.appspot.com/o/img%2Flogo_posada.png?alt=media&token=8ed10e9a-9a8c-4a2f-9c56-e80851c76588',
      'name': 'posada',
      'id': '59948a790c0a7447e8cba95c'
    },
    {
      'enable': true,
      'imagen': 'https://firebasestorage.googleapis.com/v0/b/easymaq-cloud.appspot.com/o/img%2Flogo_gamalquiler2.png?alt=media&token=4d28e01c-6545-4dde-830d-5b13ce1bdccf',
      'name': 'gamalquiler',
      'id': '59948a830c0a7447e8cba95d'
    } */
  ];


  //   {
  //     "name": "Volquetes",
  //     "description": "Volquetes",
  //     "status": 1,
  //     "id": "598cb4c2ab435a7e505ac355"
  // }


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
        })

      this.subCategory = this.categoryService.get()
        .subscribe((res: Category[]) => {
          this.listaCategorias = res;
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
