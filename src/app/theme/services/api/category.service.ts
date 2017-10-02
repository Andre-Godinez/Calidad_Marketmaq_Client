import {
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { Response } from '@angular/http';
import { HttpClient } from './http-client.service';
import { Category } from '../class/category.class';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { CONFIGPROD } from '../config/config.constant';

@Injectable()
export class CategoryService {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  private url: string = CONFIGPROD.url;

  constructor(
    @Inject(PLATFORM_ID) private platform_id,
    private http: HttpClient
  ) { }

  get(): Observable<Category[]> {
    let query: string = `${this.url}/categories`;
    return this.http.get(query)
      .map((res: Response) => {
        const data = res.json();
        return data.map((obj1: any) => new Category(obj1));
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

