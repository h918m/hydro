import { Routes } from '@angular/router';
import { ValidateDrillerComponent } from './pages/validate-driller/validate-driller.component';
import { RenewComponent } from './pages/renew/renew.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { OneDrillerComponent } from './pages/one-driller/one-driller.component';
import { NotFoundPage } from './pages/notfound/notfound.component';
import { LicenseComponent } from './pages/license/license.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ValidateDrillerComponent,
      },
      {
        path: 'renew',
        component: RenewComponent,
      },
      {
        path: 'search-result',
        component: SearchResultComponent,
      },
      {
        path: 'driller/:id',
        component: OneDrillerComponent,
      },
      {
        path: 'dashboard/renew',
        component: LicenseComponent,
     
      },
      {
        path: '**',
        component: NotFoundPage,
      },
    ],
  },
];
