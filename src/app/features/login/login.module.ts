import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({ declarations: [], imports: [CommonModule,
        LoginRoutingModule,
        RouterOutlet], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class LoginModule { }
