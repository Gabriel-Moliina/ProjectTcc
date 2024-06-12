import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TccRoutingModule } from './tcc-routing.module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from '../../services/interceptor/AuthInterceptor';


@NgModule({ declarations: [], imports: [CommonModule,
        TccRoutingModule], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class TccModule { }
