import {
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import {
  isPlatformBrowser,
  Location
} from '@angular/common';
import { Router } from '@angular/router';
import { Workcountry } from "../datastatic/workcountry.class";

@Injectable()
export class UtilsService {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  listCountry: any[] = (new Workcountry).listCountry;
  country: any = 'pe';

  constructor(
    @Inject(PLATFORM_ID) private platform_id,
    private location: Location,
    private router: Router
  ) {
    this.country = this.asignateCountry();
  }

  asignateCountry(): any {
    if (this.isBrowser) {
      let location = this.location.path();
      let name = location.split('/')[1];
      let result: any = {
        name: name,
        id: null
      };

      this.listCountry.forEach(pais => {
        if (pais.code == name) {
          result.id = pais.id;
        }
      });

      return result;
    }
  }

  _getFile64(file: File) {
    return new Promise(function (resolve, reject) {
      const reader: FileReader = new FileReader();
      reader.onloadend = function (fileLoadedEvent: any) {
        const src = { img64: fileLoadedEvent.target.result, posi: -1 } // <--- data: base64
        resolve(src);
      }
      reader.readAsDataURL(file);
    });
  }
}
