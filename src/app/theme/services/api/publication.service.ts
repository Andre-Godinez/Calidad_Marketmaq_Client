import {
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { Response } from '@angular/http';
import { HttpClient } from './http-client.service';

import { Publication } from '../class/publication.class';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CONFIGPROD } from '../config/config.constant';

@Injectable()
export class PublicationService {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  private url: string = CONFIGPROD.url;

  constructor(
    @Inject(PLATFORM_ID) private platform_id,
    private http: HttpClient
  ) { }

  get(dataquery: string): Observable<Publication[]> {
    let query: string = `${this.url}/publications${dataquery}`;
    return this.http.get(query)
      .map((res: Response) => {
        const data = res.json();
        return data.map((obj1: any) => new Publication(obj1));
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json() && err.json().msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  getById(id: string): Observable<Publication> {
    let query: string = `${this.url}/publications/${id}?filter[include]=company&filter[include]=brand&filter[include]=category`;
    return this.http.get(query)
      .map((res: Response) => {
        const data = res.json();
        return new Publication(data);
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json() && err.json().msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  addVista(id: string): Observable<any> {
    let query: string = `${this.url}/vistas`;
    let data = JSON.stringify({
      publicationId: id
    })
    return this.http.post(query, data)
      .map((res: Response) => {
        const data = res.json();
        return data;
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json() && err.json().msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

}

