import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TccRoutingModule } from './tcc-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TccRoutingModule,
    HttpClientModule
  ]
})
export class TccModule { }
