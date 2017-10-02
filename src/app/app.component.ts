import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
/* import { Meta, Title } from '@angular/platform-browser'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private isBrowser: boolean;
  constructor( @Inject(PLATFORM_ID) private platform_id,
    private router: Router) {
    this.isBrowser = isPlatformBrowser(platform_id);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      });

    }
  }
}
