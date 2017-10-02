import { Route, Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Components
import { OriginComponent } from './pages/origin/origin.component';
import { HomeComponent } from './pages/home/home.component';
// import { CorporativoComponent } from './pages/corporativo/corporativo.component';

// Clases
import { Workcountry } from './theme/datastatic/workcountry.class';

/* export class routeGenerate {
  routerTwo: Routes;
  constructor() {
    const listaCountry: any[] = (new Workcountry).listCountry;
    this.routerTwo.push({ path: 'home', component: OriginComponent });
    for (let i = 0; i < listaCountry.length; i++) {
      this.routerTwo.push({
        path: listaCountry[i]['code'] + '/home',
        component: HomeComponent
      });
      this.routerTwo.push({
        path: listaCountry[i]['code'] + '/politicas',
        loadChildren: './pages/politicas/politicas.module#PoliticasModule'
      });
      this.routerTwo.push({
        path: listaCountry[i]['code'] + '/condiciones',
        loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule'
      });
    }
    this.routerTwo.push({ path: '**', pathMatch: 'full', redirectTo: 'home' });
  }
}
export let APP_ROUTES: Routes = (new routeGenerate).routerTwo; */

export const APP_ROUTES: Routes = [
  { path: 'home', component: OriginComponent },

  { path: 'ar/home', component: HomeComponent },
  { path: 'bo/home', component: HomeComponent },
  { path: 'br/home', component: HomeComponent },
  { path: 'cl/home', component: HomeComponent },
  { path: 'co/home', component: HomeComponent },
  { path: 'cr/home', component: HomeComponent },
  { path: 'dm/home', component: HomeComponent },
  { path: 'ec/home', component: HomeComponent },
  { path: 'gt/home', component: HomeComponent },
  { path: 'hn/home', component: HomeComponent },
  { path: 'mx/home', component: HomeComponent },
  { path: 'ni/home', component: HomeComponent },
  { path: 'pa/home', component: HomeComponent },
  { path: 'py/home', component: HomeComponent },
  { path: 'pe/home', component: HomeComponent },
  { path: 'pt/home', component: HomeComponent },
  { path: 'sv/home', component: HomeComponent },
  { path: 'uy/home', component: HomeComponent },
  { path: 've/home', component: HomeComponent },

  { path: 'ar/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'bo/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'br/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'cl/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'co/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'cr/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'dm/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'ec/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'gt/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'hn/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'mx/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'ni/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'pa/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'py/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'pe/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'pt/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'sv/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 'uy/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },
  { path: 've/politicas', loadChildren: './pages/politicas/politicas.module#PoliticasModule' },

  { path: 'ar/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'bo/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'br/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'cl/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'co/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'cr/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'dm/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'ec/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'gt/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'hn/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'mx/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'ni/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'pa/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'py/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'pe/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'pt/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'sv/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 'uy/libro', loadChildren: './pages/libro/libro.module#LibroModule' },
  { path: 've/libro', loadChildren: './pages/libro/libro.module#LibroModule' },

  { path: 'ar/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'bo/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'br/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'cl/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'co/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'cr/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'dm/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'ec/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'gt/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'hn/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'mx/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'ni/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'pa/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'py/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'pe/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'pt/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'sv/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 'uy/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },
  { path: 've/condiciones', loadChildren: './pages/terminoscondiciones/terminos.module#TerminosModule' },

  { path: 'ar/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'bo/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'br/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'cl/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'co/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'cr/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'dm/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'ec/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'gt/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'hn/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'mx/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'ni/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'pa/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'py/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'pe/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'pt/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'sv/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 'uy/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },
  { path: 've/maquinarias', loadChildren: './pages/bmaquinarias/maquinarias.module#MaquinariasModule' },

  { path: 'ar/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'bo/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'br/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'cl/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'co/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'cr/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'dm/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'ec/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'gt/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'hn/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'mx/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'ni/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'pa/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'py/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'pe/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'pt/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'sv/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 'uy/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },
  { path: 've/publicar-corporativo', loadChildren: './pages/corporativo/corporativo.module#CorporativoModule' },

  { path: 'ar/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'bo/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'br/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'cl/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'co/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'cr/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'dm/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'ec/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'gt/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'hn/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'mx/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'ni/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'pa/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'py/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'pe/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'pt/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'sv/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 'uy/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },
  { path: 've/mis-favoritos', loadChildren: './pages/misfavoritos/misfavoritos.module#MisfavoritosModule' },



  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export let APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules });

