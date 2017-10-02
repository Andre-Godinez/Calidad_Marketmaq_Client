import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material
import { MaterialModule } from './reusables/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// modulos
import { BaseModule } from './reusables/base/base.module';
import { EasymodalModule } from './reusables/easymodal/easymodal.module';

// Routes
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { OriginComponent } from './pages/origin/origin.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { InformateComponent } from './pages/home/informate/informate.component';
import { BuscarporComponent } from './pages/home/buscarpor/buscarpor.component';
// import { CorporativoComponent } from './pags/corporativo/corporativo.component';

// Servicios
import { seoOriginService } from './theme/services/seo/seo-origin.service';
import { seoHomeService } from './theme/services/seo/seo-home.service';
import { seoMaquinariasService } from './theme/services/seo/seo-maquinarias.service';
import { UtilsService } from './theme/services/utils.service';
import { HttpClient } from './theme/services/api/http-client.service';
import { RankingService } from './theme/services/api/ranking.service';
import { CategoryService } from './theme/services/api/category.service';
import { BookService } from './theme/services/api/book.service';
import { FavouriteService } from './theme/services/api/favourite.service';
import { CompanyService } from './theme/services/api/company.service';
import { BrandService } from './theme/services/api/brand.service';
import { PublicationService } from './theme/services/api/publication.service';
import { UserService } from './theme/services/api/usuario.service';


// import { CuppaOAuthModule } from '../../node_modules/ng2-social-login';

/* FOR UNIVERSAL */
/* export { AppComponent };
@NgModule({
  declarations: [
    AppComponent,
    OriginComponent,
    HomeComponent,
    SliderComponent,
    InformateComponent,
    CardMaquinaComponent,
    BuscarporComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'easymaq-seo'
    }),
    MaterialModule,
    BaseModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  exports: [AppComponent],
  providers: [
    UtilsService,
    HttpClient,
    seoOriginService,
    seoHomeService,
    seoMaquinariasService,
    CategoryService,
    CompanyService,
    BrandService,
    PublicationService,
    BookService,
    UserService,
    FavouriteService,
    RankingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } */


/* DEVELOP */
@NgModule({
  declarations: [
    AppComponent,
    OriginComponent,
    HomeComponent,
    SliderComponent,
    InformateComponent,
    BuscarporComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BaseModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [
    UtilsService,
    HttpClient,
    seoOriginService,
    seoHomeService,
    seoMaquinariasService,
    CategoryService,
    CompanyService,
    BrandService,
    PublicationService,
    BookService,
    UserService,
    FavouriteService,
    RankingService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

