import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { CatComponent } from './app/cat/cat.component';
import { FaviconComponent } from './app/favicon/favicon.component';
import { FindMyIpAddressComponent } from './app/find-my-ip-address/find-my-ip-address.component';

bootstrapApplication(AppComponent, {providers: [
  provideHttpClient(),
  provideRouter([
    {
      path: 'cat',
      component: CatComponent
    },
    {
      path: 'favicon',
      component: FaviconComponent
    },
    {
      path: 'myip',
      component: FindMyIpAddressComponent
    }
  ])
]})
  .catch((err) => console.error(err));
