import { Routes } from '@angular/router';
import { CardsComponent } from './modules/tcc/pages/cards/cards.component';

export const routes: Routes = [{
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },{
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'cards',
    component: CardsComponent
  }
];
