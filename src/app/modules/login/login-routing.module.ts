import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignInComponent } from './pages/sign-in-component/sign-in-component.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  children: [
    { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
