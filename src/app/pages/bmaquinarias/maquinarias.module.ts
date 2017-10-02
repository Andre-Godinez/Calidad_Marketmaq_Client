import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos
import { BaseModule } from '../../reusables/base/base.module';

//componentes
import { Maquinarias } from './maquinarias.component';
import { DetalleMaquinariaComponent } from './detmaquinaria/detalle-maquinaria.component';
/* import { CardMaquinaComponent } from './card-maquina.component'; */

/* import { HttpClient } from '../../theme/services/api/http-client.service';
import { CategoryService } from '../../theme/services/api/category.service';
import { CompanyService } from '../../theme/services/api/company.service';
import { BrandService } from '../../theme/services/api/brand.service';
import { PublicationService } from '../../theme/services/api/publication.service'; */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { RankingModule } from '../../reusables/ranking/ranking.module';
import { EasymodalModule } from '../../reusables/easymodal/easymodal.module';
/* import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { ConfirmationService } from '../../../../node_modules/primeng/components/common/api';
import { ConfirmDialogModule } from '../../../../node_modules/primeng/components/confirmdialog/confirmdialog';
import { PagesModule } from '../pages.module';
import { SwiperModule } from 'angular2-useful-swiper';
// Modulos
// import { EasymodalModule } from '../easymodal/easymodal.module';
ks
import { BmaquinariasComponent } from './bmaquinarias.component';
import { DetmaquinariaComponent } from './detmaquinaria/detmaquinaria.component';
import { MapaComponentPublicados } from '../mapa-publicados/mapa-publicados.component';*/
//ruteo
import { routing } from './maquinarias.routing';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    NgxPaginationModule,
    NgbModule,
    RankingModule,
    EasymodalModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgPba9ENKjx2AD7IOG2SIFN3x5WYAKqo4'
    }),
    ShareButtonsModule.forRoot(),
    routing
    /* ReactiveFormsModule,
    FormsModule,
    Angular2FontAwesomeModule,
    ConfirmDialogModule,
    SwiperModule,
    EasymodalModule,
    PagesModule,
    NgxPaginationModule */
  ],
  declarations: [
    Maquinarias,
    DetalleMaquinariaComponent
    /* CardMaquinaComponent */
    /* BmaquinariasComponent,
    DetmaquinariaComponent,
    MapaComponentPublicados */
  ],
  providers: [
    /* ConfirmationService */
    /* CategoryService,
    CompanyService,
    BrandService,
    PublicationService,
    HttpClient */
  ],
})
export class MaquinariasModule { }
