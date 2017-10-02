import {
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { Response } from '@angular/http';
import { HttpClient } from './http-client.service';
import { Book } from '../class/book.class';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { CONFIGPROD } from '../config/config.constant';
@Injectable()
export class BookService {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  private url: string = CONFIGPROD.url;
  constructor(
    @Inject(PLATFORM_ID) private platform_id,
    private http: HttpClient
  ){}

  PostReclamo(obj: any):Observable<Book>{
    let query: string = `${this.url}/books`;
    let data = JSON.stringify(obj);
    return this.http.post(query,data)
            .map((res:Response)=>{
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
}
