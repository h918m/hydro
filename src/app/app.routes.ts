import { Routes } from '@angular/router';
import { ValidateDrillerComponent } from './pages/validate-driller/validate-driller.component';
import { RenewComponent } from './pages/renew/renew.component';
import { NotFoundPage } from './pages/notfound/notfound.component';

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
        path: '**',
        component: NotFoundPage,
      },
    ],
  },
];
