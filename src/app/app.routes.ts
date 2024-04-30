import { Routes } from '@angular/router';
export const routes: Routes = [{
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },{
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'tcc',
    loadChildren: () => import('./features/tcc/tcc.module').then(m => m.TccModule)
  }
];
