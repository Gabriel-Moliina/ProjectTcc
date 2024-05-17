import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TccRoutingModule } from './tcc-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../services/interceptor/AuthInterceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TccRoutingModule,
    HttpClientModule
  ],providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class TccModule { }
