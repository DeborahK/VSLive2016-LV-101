import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

// Our main component
import {AppComponent} from './app.component';

bootstrap(AppComponent,
          [ROUTER_PROVIDERS]);