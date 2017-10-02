import {
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { Response } from '@angular/http';
import { HttpClient } from './http-client.service';

/* import { Brand } from '../class/brand.class'; */
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CONFIGPROD } from '../config/config.constant';

@Injectable()
export class UserService {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  private url: string = CONFIGPROD.url;

  constructor(
    @Inject(PLATFORM_ID) private platform_id,
    private http: HttpClient
  ) { }

  getInfo(obj?: any): Observable<any> {
    let query: string = `${this.url}/info-corporativo`;
    let data = JSON.stringify({
      nombre: obj.nombre,
      email: obj.email
    });
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

  login(obj?: any): Observable<any> {
    let query: string = `${this.url}/usuarios/login`;
    let data = JSON.stringify({
      email: obj.email,
      password: obj.password
    });
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

  register(obj?: any): Observable<any> {
    let query: string = `${this.url}/usuarios`;
    let data = JSON.stringify({
      email: obj.email,
      password: obj.password
    });
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

  resetPassword(obj?: any): Observable<any> {
    let query: string = `${this.url}/reset-password`;
    let data = JSON.stringify({
      email: obj.email
    });
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

