import {
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { Response } from '@angular/http';
import { HttpClient } from './http-client.service';

import { Brand } from '../class/brand.class';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CONFIGPROD } from '../config/config.constant';

@Injectable()
export class BrandService {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  private url: string = CONFIGPROD.url;

  constructor(
    @Inject(PLATFORM_ID) private platform_id,
    private http: HttpClient
  ) { }

  get(): Observable<Brand[]> {
    let query: string = `${this.url}/brands`;
    return this.http.get(query)
      .map((res: Response) => {
        const data = res.json();
        return data.map((obj1: any) => new Brand(obj1));
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

