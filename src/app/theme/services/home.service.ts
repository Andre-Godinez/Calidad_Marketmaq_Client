/* import {
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

@Injectable()
export class HomeService {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  generalFirebase: any;
  usuario: any = {};

  constructor(
    @Inject(PLATFORM_ID) private platform_id,
  ) {
    if (this.isBrowser) {
      console.log('entra home');
    }
  }

}
 */
