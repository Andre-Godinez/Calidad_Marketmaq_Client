import {
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { Response } from '@angular/http';
import { HttpClient } from './http-client.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { CONFIGPROD } from '../config/config.constant';
@Injectable()
export class FavouriteService {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  private url: string = CONFIGPROD.url;
  constructor(
    @Inject(PLATFORM_ID) private platform_id,
    private http: HttpClient
  ) { }

  AddFavourite(obj: any): Observable<any> {
    let query: string = `${this.url}/favorites`;
    let data = JSON.stringify(obj);
    return this.http.post(query, data)
      .map((res: Response) => {
        console.log('res: ', res);
        const data = res.json();
        return data
      }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json() && err.json().msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      });
  }

  delete(id: string): Observable<any> {
    let query: string = `${this.url}/favorites/${id}`;
    return this.http.delete(query)
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
  GetFavouritesByUserId(iduser):Observable<any>{
    let query: string = `${this.url}/favorites?filter={%22where%22:{%22usuarioId%22:%22${iduser}%22},%22include%22:{%22relation%22:%22publication%22,%22scope%22:{%22include%22:[{%22relation%22: %22company%22},{%22relation%22: %22brand%22},{%22relation%22:%22category%22}]}}}`;
        return this.http.get(query)
            .map(res=>{
              const data = res.json();
              return data;
            }).catch((err: Response | any) => {
        console.log('err : ', err);
        let errmsg: string;
        if (err instanceof Response) {
          errmsg = err.json() && err.json().msg || 'Tenemos problemas en el servidor.\nIntentelo más tarde';
        }
        return Observable.throw(errmsg);
      })
  }
}
